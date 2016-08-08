import React from 'react'
import { Link } from 'react-router'
// 导入样式
import './index.scss'
// 导入组件
import Top from 'components/Top'
import { GetData } from '../ajax'
// 订单信息
const Detail = React.createClass({
  propTypes: {
    order: React.PropTypes.object
  },
  render() {
    return (
      <div className='detail'>
        <p>订单编号： <span>{this.props.order.orderId}</span></p>
        <p>消耗积分： <span>{this.props.order.goods_sumJfPrice}</span></p>
        <p>下单时间： <span>{this.props.order.add_time}</span><span className='send fr'>{this.props.order.status_msg}</span></p>
      </div>
    )
  }
})
// 商品信息
const Commodity = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='commodity'>
        <img src={this.props.item.img} />
        <div className='title'>
          <p className='num'>{this.props.item.title}</p>
          <p>数量：<span>{this.props.item.quantity}</span></p>
        </div>
      </div>
    )
  }
})
const User = React.createClass({
  propTypes: {
    delivery: React.PropTypes.object
  },
  render() {
    return (
      <div className='userBox'>
        <div className='usermsg'>
          <p>收货人： <span>{this.props.delivery.address_name}</span></p>
          <p>联系方式： <span>{this.props.delivery.mobile}</span></p>
          <p>地址： <span>{this.props.delivery.address}</span></p>
        </div>
      </div>
    )
  }
})
export default React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  getInitialState() {
    return {
      shopData: {
        order_info: {},
        item_list: [],
        delivery_info: {}
      }
    }
  },
  componentDidMount() {
    var self = this
    GetData('m=User&a=orderDetail&id=' + this.props.location.query.id, (reponse) => {
      self.setState({
        shopData: reponse.data
      })
    })
  },
  render() {
    var items = []
    this.state.shopData.item_list.forEach((it) => {
      items.push(
        <Commodity item={it} key={this.props.location.query.id} />
      )
    })
    return (
      <div className="wrap">
        <Top title="订单详情页" />
        <Detail order={this.state.shopData.order_info} />
        <div>
          {items}
        </div>
        <p className='apply'><span className='fl'>支付方式</span><span className='online fr'>{this.state.shopData.pay_type}</span></p>
        <User delivery={this.state.shopData.delivery_info} />
        <div className="bottom">
          <Link to="/">申请退货</Link>
          <Link to="/">联系客服</Link>
        </div>
      </div>
    )
  }
})
