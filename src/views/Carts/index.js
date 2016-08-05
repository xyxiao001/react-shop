import React from 'react'
import { Checkbox, Button, Icon, Modal, message } from 'antd'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import { GetData } from '../ajax'
import { setOrder } from '../saveOrder'

import './index.scss'

// 注册弹出层
const confirm = Modal.confirm

const Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object,
    change: React.PropTypes.func,
    deleteItem: React.PropTypes.func,
    add: React.PropTypes.func,
    minus: React.PropTypes.func,
    changeInput: React.PropTypes.func
  },
  render() {
    return (
      <div className="cart-item">
        <div className="item-left">
          <Checkbox
            name={'checkout' + this.props.item.id}
            checked={this.props.item.checked}
            onChange={this.props.change}
          />
        </div>
        <div className="item-right">
          <div className="r1">
            <img src={this.props.item.imgSrc}></img>
          </div>
          <div className="r2">
            <p className="shop-name">{this.props.item.title}</p>
            <div className="num-select">
              <div className="num-reduce">
                <Icon type="minus" onClick={this.props.minus} name={this.props.item.id} />
              </div>
              <div className="num-show">
                <input type="number"
                  value={this.props.item.buy_num}
                  name={this.props.item.id}
                  onChange={this.props.changeInput} />
              </div>
              <div className="num-add">
                <Icon type="plus" onClick={this.props.add} name={this.props.item.id} />
              </div>
            </div>
          </div>
          <div className="r3">
            <div className="delete">
              <Icon type="delete" name={this.props.item.id} onClick={this.props.deleteItem} />
            </div>
            <p><span className="now-num">{this.props.item.integral_total}</span><span>积分</span></p>
          </div>
        </div>
      </div>
    )
  }
})

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      items: [],
      selectAll: false,
      allIntegral: 0,
      myIntegral: 500
    }
  },
  componentDidMount() {
    const self = this
    GetData('m=Cart&a=lists', function (data) {
      self.setState({
        items: data.items
      })
    })
  },
  render() {
    const self = this
    var noCart = this.state.items.length === 0 ? 'show' : 'hide'
    var shopList = this.state.items.length === 0 ? 'hide' : 'show'
    var list = []
    this.state.items.forEach((item) => {
      list.push(
        <Item
          key={item.id}
          item={item}
          change={change}
          deleteItem={deleteItem}
          add={add}
          minus={minus}
          changeInput={changeInput}
        />
      )
    })
    // 全选逻辑
    function changeALl(e) {
      var select = e.target.checked
      var newItems = self.state.items
      var allPrice = 0
      newItems.forEach((newItem) => {
        newItem.checked = select
        allPrice = allPrice + newItem.integral_total
      })
      if (!select) {
        allPrice = 0
      }
      self.setState({
        selectAll: select,
        items: newItems,
        allIntegral: allPrice
      })
    }
    // 单个选择逻辑
    function change(e) {
      var select = e.target.checked
      var id = parseInt(e.target.name.substring(8, e.target.name.length))
      var newItems = self.state.items
      var allPrice = self.state.allIntegral
      var all = true
      newItems.forEach((newItem) => {
        if (id === newItem.id) {
          newItem.checked = select
          if (select) {
            allPrice = allPrice + newItem.integral_total
          } else {
            allPrice = allPrice - newItem.integral_total
          }
        }
        if (newItem.checked === false) {
          all = false
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice,
        selectAll: all
      })
    }
    // 删除
    function deleteItem(e) {
      var id = parseInt(e.target.getAttribute('name'))
      confirm({
        title: '你确定删掉本商品!!',
        onOk() {
          var newItems = []
          var allPrice = self.state.allIntegral
          var all = true
          self.state.items.forEach((newItem) => {
            if (id !== newItem.id) {
              newItems.push(newItem)
            }
            if (newItem.checked === false) {
              all = false
            }
            if (id === newItem.id && newItem.checked === true) {
              allPrice = allPrice - newItem.integral_total
            }
          })
          self.setState({
            items: newItems,
            allIntegral: allPrice,
            selectAll: all
          })
        }
      })
    }

    // 商品添加
    function add(e) {
      var id = parseInt(e.target.getAttribute('name'))
      var newItems = self.state.items
      var allPrice = self.state.allIntegral
      newItems.forEach((newItem) => {
        if (id === newItem.id) {
          newItem.buy_num = newItem.buy_num + 1
          newItem.integral_total = newItem.buy_num * newItem.integral

          if (newItem.checked) {
            allPrice = allPrice + newItem.integral
          }
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice
      })
    }

    // 商品减少
    function minus(e) {
      var id = parseInt(e.target.getAttribute('name'))
      var newItems = self.state.items
      var allPrice = self.state.allIntegral
      newItems.forEach((newItem) => {
        if (id === newItem.id) {
          if (newItem.buy_num > 1) {
            newItem.buy_num = newItem.buy_num - 1
            newItem.integral_total = newItem.buy_num * newItem.integral
            if (newItem.checked) {
              allPrice = allPrice - newItem.integral
            }
          } else {
            msg('商品至少买一件哟！', 0.5)
          }
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice
      })
    }

    function msg(info, t) {
      message.info(info, t)
    }

    // 输入框
    function changeInput(e) {
      var id = parseInt(e.target.getAttribute('name'))
      // 输入的值
      var num = parseInt(e.target.value)
      var newItems = self.state.items
      var allPrice = 0
      newItems.forEach((newItem) => {
        if (id === newItem.id) {
          if (num >= 1) {
            newItem.buy_num = num
            newItem.integral_total = newItem.buy_num * newItem.integral
            if (newItem.checked) {
              allPrice = allPrice + newItem.integral_total
            }
          } else {
            newItem.buy_num = 0
            newItem.integral_total = newItem.buy_num * newItem.integral
            msg('商品至少买一件哟！', 0.5)
            if (newItem.checked) {
              allPrice = allPrice + newItem.integral_total
            }
          }
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice
      })
    }

    // 兑换
    function goOrder() {
      if (self.state.allIntegral === 0) {
        msg('还没选择商品呢！', 0.75)
      } else if (self.state.allIntegral > self.state.myIntegral) {
        msg('积分还不够呢！ 去赚积分，或者刷新试试。', 1.5)
      } else {
        // 存商品信息
        var items = []
        self.state.items.forEach((item) => {
          if (item.checked) {
            items.push(
              {
                item_id: item.id,
                num: item.buy_num
              }
            )
          }
        })
        setOrder(JSON.stringify(items))
        // 跳转到订单预览页
        self.context.router.push({
          pathname: '/order'
        })
      }
    }
    return (
      <div className="wrap">
        <Top title="购物车" />
        <div className={noCart + ' ' + 'no-cart'}>
          <div className="cart-img">
            <img src="/src/assets/cart.png" />
          </div>
          <p>购物车还是空的</p>
        </div>
        <div className={shopList + ' ' + 'shop-list'}>
          <div className="cart-control">
            <Checkbox onChange={changeALl} checked={this.state.selectAll}>全选</Checkbox>
            <span className="total">总计:<span className="total-num">{this.state.allIntegral}积分</span></span>
            <Button type="primary" onClick={goOrder}>兑换</Button>
          </div>
          <div className="cart-list">
            {list}
          </div>
        </div>
        <Navbar />
      </div>
    )
  }
})
