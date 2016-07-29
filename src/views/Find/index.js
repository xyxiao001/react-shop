import React from 'react'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'

export default React.createClass({
  render() {
    return (
      <div className="wrap">
        <Top title="发现" />
        <Navbar />
      </div>
    )
  }
})
