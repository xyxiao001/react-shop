import React from 'react'
import { Link } from 'react-router'
// 导入css
import './index.scss'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import { GetData } from '../ajax'

// 用户信息
const User = React.createClass({
  propTypes: {
    info: React.PropTypes.object
  },
  render() {
    return (
      <div className="user">
        <p className="user-name"><span>{this.props.info.nickname}</span><a>赚积分</a></p>
        <p>
          <span className="userAddress">{this.props.info.area}</span>
          {/* <Link to='/address' className="managerAddress">管理收货地址</Link> */}
          <span className="integral-right pull-right">当前积分: <span className="my-integral">{this.props.info.groupid}</span></span>
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
      <Link to={{ pathname: '/shopDetail', query: { id: this.props.item.id } }}>
        <div className="conversionBox">
          <p>单号：<span>{this.props.item.orderId}</span></p>
          <p>商品：<span>{this.props.item.title}</span><span className='send fr'>{this.props.item.status_msg}</span></p>
        </div>
      </Link>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      user_info: {},
      shops: []
    }
  },
  componentDidMount() {
    const self = this
    GetData('m=User&a=myOrder', (reponse) => {
      self.setState({
        shops: reponse.data.list
      })
    })
    GetData('m=Index&a=info', (reponse) => {
      self.setState({
        user_info: reponse.user_info
      })
    })
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
        <User info={this.state.user_info} />
        <div className='nav'>
          <Link to='/integral' className='conversion'>兑换记录</Link>
          <Link to='/integralLog' className='integral'>积分记录</Link>
        </div>
        <div>
          {shops}
        </div>
        <Navbar />
      </div>
    )
  }
})
