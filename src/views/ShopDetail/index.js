import React from 'react'
import { Link } from 'react-router'

// 导入组件
import Top from 'components/Top'

import './index.scss'

// 订单信息
const Detail = React.createClass({
  getInitialState() {
    return {
      num: '121565466',
      integral: '889',
      money: '￥238.00',
      time: '2016.6.25 18:35',
      isSend: '已发货'
    }
  },
  render() {
    return (
      <div className='detail'>
        <p>订单编号： <span>{this.state.num}</span></p>
        <p>消耗积分： <span>{this.state.integral}</span></p>
        <p>订单编号： <span>{this.state.money}</span></p>
        <p>订单编号： <span>{this.state.time}</span><span className='send fr'>{this.state.isSend}</span></p>
      </div>
    )
  }
})
// 商品信息
const Commodity = React.createClass({
  getInitialState() {
    return {
      commodityNum: 1,
      src: 'src/assets/commodity1.png'
    }
  },
  render() {
    return (
      <div className='commodity'>
        <img src={this.state.src} />
        <div className='title'>
          <p className='num'>防水手表</p>
          <p>数量：<span>1</span></p>
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  getInitialState() {
    return {
      name: '小明',
      tel: '16666666666',
      address: '北京市朝阳区188号'
    }
  },
  render() {
    return (
      <div>
        <img src={this.state.src} />
        <div className='usermsg'>
          <p>收货人： <span>{this.state.name}</span></p>
          <p>联系方式： <span>{this.state.tel}</span></p>
          <p>地址： <span>{this.state.address}</span></p>
        </div>
      </div>
    )
  }
})

export default React.createClass({
  render() {
    return (
      <div className="wrap">
        <Top title="订单详情页" />
        <Detail />
        <Commodity />
        <p className='apply'><span className='fl'>支付方式</span><span className='online fr'>在线支付</span></p>
        <User />
        <div className="bottom">
          <Link to="/">申请退货</Link>
          <Link to="/">联系客服</Link>
        </div>
      </div>
    )
  }
})
