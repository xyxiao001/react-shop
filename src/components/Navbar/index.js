import React from 'react'
import { Link } from 'react-router'

// 导入样式
import './index.scss'
export default React.createClass({
  render() {
    return (
      <div className="menu">
        <Link to="/">精选</Link>
        <Link to="/find">发现</Link>
        <Link to="/carts">购物车</Link>
        <Link to="/inte/exchange">我的积分</Link>
      </div>
    )
  }
})
