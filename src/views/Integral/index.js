import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
// 导入css
import './index.scss'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

// 用户信息
const User = React.createClass({
  getInitialState() {
    return {
      username: '小明',
      address: '北京市朝阳区188号',
      integral: '998'
    }
  },
  render() {
    return (
      <div className="user">
        <p className="user-name"><span>{this.state.username}</span><a>赚积分</a></p>
        <p>
          <span className="userAddress">{this.state.address}</span>
          <span className="integral-right pull-right">当前积分: <span className="my-integral">{this.state.integral}</span></span>
        </p>
      </div>
    )
  }
})

// 兑换详情
const Conversion = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <Link to={`/ShopDetail?${this.props.item.id}`}>
        <div className="conversionBox">
          <p>单号：<span>{this.props.item.addNum}</span></p>
          <p>商品：<span>{this.props.item.commodity}</span><span className='send fr'>{this.props.item.shipments}</span></p>
        </div>
      </Link>
    )
  }
})

const Integral = React.createClass({
  render() {
    return (
      <div className='integralBox'>
        <p>积分1</p>
        <p>积分1</p>
        <p>积分1</p>
        <p>积分1</p>
        <p>积分1</p>
        <p>积分1</p>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      shops: [
        {
          id: 0,
          addNum: '123456789',
          commodity: '冰激凌',
          shipments: '待发货'
        },
        {
          id: 1,
          addNum: '123456789',
          commodity: '冰激凌2',
          shipments: '已发货'
        },
        {
          id: 2,
          addNum: '123456789',
          commodity: '冰激凌2',
          shipments: '已发货'
        }
      ]
    }
  },
  conversion() {
    $('.conversionBox').css('display', 'block')
    $('.integralBox').css('display', 'none')
  },
  integral() {
    $('.conversionBox').css('display', 'none')
    $('.integralBox').css('display', 'block')
  },
  render() {
    var shops = []
    this.state.shops.forEach((shop) => {
      shops.push(
        <Conversion item={shop} key={shop.id} />
      )
    })
    return (
      <div className="wrap">
        <Top title="我的积分" />
        <User />
        <div className='nav'>
          <a className='conversion fl' onClick={this.conversion}>兑换记录</a>
          <a className='integral fr' onClick={this.integral}>积分记录</a>
        </div>
        <div>
          {shops}
        </div>
        <Integral />
        <Navbar />
      </div>
    )
  }
})
