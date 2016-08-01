import React from 'react'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

import './index.scss'

export default React.createClass({
  render() {
    return (
      <div className="wrap">
        <Top title="购物车" />
        <Navbar />
      </div>
    )
  }
})
