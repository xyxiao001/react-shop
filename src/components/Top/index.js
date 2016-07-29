import React from 'react'

// 导入样式
import './index.scss'
export default React.createClass({
  // 属性校验
  propTypes: {
    title: React.PropTypes.string
  },
  render() {
    return (
      <section className="menus">
        <div className="menu-top">
          <a>{this.props.title}</a>
        </div>
      </section>
    )
  }
})
