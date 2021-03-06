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
    info: React.PropTypes.object,
    user_credit: React.PropTypes.string
  },
  render() {
    return (
      <div className="user">
        <p className="user-name"><span>{this.props.info.nickname}</span><a>赚积分</a></p>
        <p>
          <span className="userAddress">{this.props.info.area}</span>
          {/* <Link to='/address' className="managerAddress">管理收货地址</Link> */}
          <span className="integral-right pull-right">当前积分: <span className="my-integral">{this.props.user_credit}</span></span>
        </p>
      </div>
    )
  }
})

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  getInitialState() {
    return {
      data: {},
      user_info: {}
    }
  },
  componentDidMount() {
    const self = this
    setTimeout(function () {
      GetData('m=Index&a=info', (data) => {
        self.setState({
          data: data,
          user_info: data.user_info
        })
      })
    }, 500)
  },
  render() {
    return (
      <div className="wrap">
        <Top title="我的积分" />
        <User info={this.state.user_info} user_credit={this.state.data.user_credit} />
        <div className='nav'>
          <Link to='/inte/exchange' className='conversion'>兑换记录</Link>
          <Link to='/inte/integral' className='integral'>积分记录</Link>
        </div>
        <div>
          {this.props.children}
        </div>
        <Navbar />
      </div>
    )
  }
})
