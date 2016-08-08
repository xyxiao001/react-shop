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
    user_info: React.PropTypes.object
  },
  render() {
    return (
      <div className="user">
        <p className="user-name"><span>{this.props.user_info.nickname}</span><a>赚积分</a></p>
        <p>
          <span className="userAddress">{this.props.user_info.area}</span>
          {/* <Link to='/address' className="managerAddress">管理收货地址</Link> */}
          <span className="integral-right pull-right">当前积分: <span className="my-integral">{this.props.user_info.groupid}</span></span>
        </p>
      </div>
    )
  }
})

const Integral = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='integralBox'>
        <p><span>{this.props.item.name}</span><span className='integralPlus'>{this.props.item.value}</span><span>{this.props.item.update}</span></p>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      integralLogs: [],
      user_info: {}
    }
  },
  componentDidMount() {
    var self = this
    GetData('m=User&a=pointsList', (reponse) => {
      self.setState({
        integralLogs: reponse.data.list
      })
    })
    GetData('m=Index&a=info', (reponse) => {
      console.log(reponse)
      self.setState({
        user_info: reponse.user_info
      })
    })
  },
  render() {
    let integralLogs = []
    this.state.integralLogs.forEach((integralLog) => {
      integralLogs.push(
        <Integral item={integralLog} key={integralLog.id} />
      )
    })
    return (
      <div className="wrap">
        <Top title="我的积分" />
        <User user_info={this.state.user_info} />
        <div className='nav'>
          <Link to='/integral' className='conversion fl'>兑换记录</Link>
          <Link to='/integralLog' className='integral fr'>积分记录</Link>
        </div>
        <div>
          {integralLogs}
        </div>
        <Navbar />
      </div>
    )
  }
})
