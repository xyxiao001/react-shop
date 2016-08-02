import React from 'react'
import { Checkbox, Button, Icon, Modal } from 'antd'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

import './index.scss'

// 注册弹出层
const confirm = Modal.confirm

const Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object,
    checked: React.PropTypes.bool,
    change: React.PropTypes.func
  },
  render() {
    function showConfirm() {
      confirm({
        title: '你确定删掉本商品!!',
        onOk() {},
        onCancel() {}
      })
    }
    return (
      <div className="cart-item">
        <div className="item-left">
          <Checkbox
            name={'checkout' + this.props.item.id}
            checked={this.props.checked || this.props.item.checked}
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
                <Icon type="minus" />
              </div>
              <div className="num-show">
                <input type="text" defaultValue={this.props.item.num} />
              </div>
              <div className="num-add">
                <Icon type="plus" />
              </div>
            </div>
          </div>
          <div className="r3">
            <div className="delete">
              <Icon type="delete" name={this.props.item.id} onClick={showConfirm} />
            </div>
            <p><span className="now-num">{this.props.item.intefrals}</span><span>积分</span></p>
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
          intefral: 500,
          intefrals: 500,
          name: '2条 皇室御用超柔面巾',
          checked: false
        },
        {
          id: 101,
          imgSrc: 'http://yanxuan.nosdn.127.net/1be97c3caf5e94ec851a69634c2c9ecd.png?quality=90&thumbnail=200x200&imageView',
          num: 2,
          intefral: 200,
          intefrals: 400,
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
          checked={this.state.selectAll}
          change={change}
        />
      )
    })
    function changeALl(e) {
      self.setState({
        selectAll: e.target.checked === true
      })
    }
    function change(e) {
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
            <Checkbox onChange={changeALl}>全选</Checkbox>
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
