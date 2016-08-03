import React from 'react'
import { Link } from 'react-router'
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

const Integral = React.createClass({
  render() {
    return (
      <div className='integralBox'>
        <p>积分记录页面</p>
      </div>
    )
  }
})

export default React.createClass({
  render() {
    return (
      <div className="wrap">
        <Top title="我的积分" />
        <User />
        <div className='nav'>
          <Link to='/integral' className='conversion fl'>兑换记录</Link>
          <Link to='/integralLog' className='integral fr'>积分记录</Link>
        </div>
        <Integral />
        <Navbar />
      </div>
    )
  }
})
