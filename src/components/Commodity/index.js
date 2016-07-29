import React from 'react'
import './index.scss'

export default React.createClass({
  render() {
    return (
      <a className="commodity-item">
        <img src="http://yanxuan.nosdn.127.net/07e2057d35153f063cf042177d6a815e.png?imageView&quality=85&thumbnail=330x330" alt="" />
        <p className="commodity-name">茶香酥200克</p>
        <p className="commodity-num">300积分</p>
      </a>
    )
  }
})
