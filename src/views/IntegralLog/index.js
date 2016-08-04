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
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='integralBox'>
        <p><span>{this.props.item.category}</span><span className='integralPlus'>{this.props.item.integralPlus}</span><span>{this.props.item.time}</span></p>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      integralLogs: [
        {
          id: 1,
          category: '会员-生日礼包',
          integralPlus: '+20',
          time: '2016-8-8'
        },
        {
          id: 2,
          category: '重庆鸡公煲1人餐',
          integralPlus: '+38',
          time: '2016-9-9'
        },
        { id: 3,
          category: '黄焖鸡米饭2人餐',
          integralPlus: '+32',
          time: '2016-10-10'
        }
      ]
    }
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
        <User />
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
