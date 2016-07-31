import React from 'react'
import './index.scss'

export default React.createClass({
  // 属性校验
  propTypes: {
    name: React.PropTypes.string
  },
  render() {
    return (
      <div className="mark">
        <span className="mark-left"></span>
        <span className="mark-name">{this.props.name}</span>
        <span className="mark-right"></span>
      </div>
    )
  }
})
