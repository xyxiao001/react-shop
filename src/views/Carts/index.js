import React from 'react'
import { Checkbox, Button, Icon, Modal, message } from 'antd'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

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
            <p className="shop-name">{this.props.item.name}</p>
            <div className="num-select">
              <div className="num-reduce">
                <Icon type="minus" onClick={this.props.minus} name={this.props.item.id} />
              </div>
              <div className="num-show">
                <input type="number"
                  value={this.props.item.num}
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
            <p><span className="now-num">{this.props.item.integrals}</span><span>积分</span></p>
          </div>
        </div>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      items: [
        {
          id: 100,
          imgSrc: 'http://yanxuan.nosdn.127.net/e12c7e19e727d346da443dcfa06ff0a5.png?quality=90&thumbnail=200x200&imageView',
          num: 1,
          integral: 500,
          integrals: 500,
          name: '2条 皇室御用超柔面巾',
          checked: false
        },
        {
          id: 101,
          imgSrc: 'http://yanxuan.nosdn.127.net/1be97c3caf5e94ec851a69634c2c9ecd.png?quality=90&thumbnail=200x200&imageView',
          num: 2,
          integral: 200,
          integrals: 400,
          name: '全棉针织条纹四件套',
          checked: false
        },
        {
          id: 103,
          imgSrc: 'http://yanxuan.nosdn.127.net/1be97c3caf5e94ec851a69634c2c9ecd.png?quality=90&thumbnail=200x200&imageView',
          num: 1,
          integral: 200,
          integrals: 200,
          name: '全棉针织条纹四件套',
          checked: false
        }
      ],
      selectAll: false,
      allIntegral: 0
    }
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
        allPrice = allPrice + newItem.integrals
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
            allPrice = allPrice + newItem.integrals
          } else {
            allPrice = allPrice - newItem.integrals
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
              allPrice = allPrice - newItem.integrals
            }
          })
          self.setState({
            items: newItems,
            allIntegral: allPrice,
            selectAll: all
          })
        },
        onCancel() {}
      })
    }

    // 商品添加
    function add(e) {
      var id = parseInt(e.target.getAttribute('name'))
      var newItems = self.state.items
      var allPrice = self.state.allIntegral
      newItems.forEach((newItem) => {
        if (id === newItem.id) {
          newItem.num = newItem.num + 1
          newItem.integrals = newItem.num * newItem.integral

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
          if (newItem.num > 1) {
            newItem.num = newItem.num - 1
            newItem.integrals = newItem.num * newItem.integral
            if (newItem.checked) {
              allPrice = allPrice - newItem.integral
            }
          } else {
            msg('商品至少买一件哟！')
          }
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice
      })
    }

    function msg(info) {
      message.info(info, 0.5)
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
            newItem.num = num
            newItem.integrals = newItem.num * newItem.integral
            if (newItem.checked) {
              allPrice = allPrice + newItem.integrals
            }
          } else {
            newItem.num = 0
            newItem.integrals = newItem.num * newItem.integral
            msg('商品至少买一件哟！')
            if (newItem.checked) {
              allPrice = allPrice + newItem.integrals
            }
          }
        }
      })
      self.setState({
        items: newItems,
        allIntegral: allPrice
      })
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
            <Button type="primary">兑换</Button>
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
