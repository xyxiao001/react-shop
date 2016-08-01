import React from 'react'
import { Checkbox, Button } from 'antd'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

import './index.scss'

export default React.createClass({
  getInitialState() {
    return {
      items: [1]
    }
  },
  render() {
    var noCart = this.state.items.length === 0 ? 'show' : 'hide'
    var shopList = this.state.items.length === 0 ? 'hide' : 'show'
    function changeALl() {
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
            <span className="total">总计:<span className="total-num">500积分</span></span>
            <Button type="primary">兑换</Button>
          </div>
          <div className="cart-list">
            <div className="cart-item">
              <div className="item-left">
                <Checkbox />
              </div>
              <div className="item-right">
                <div className="r1">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    )
  }
})
