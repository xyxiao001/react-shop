import React from 'react'
import './index.scss'

export default React.createClass({
  // 属性校验
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <a className="commodity-item">
        <img src={this.props.item.src} alt={this.props.item.name} />
        <p className="commodity-name">{this.props.item.name}</p>
        <p className="commodity-num">{this.props.item.num}</p>
        <span className="commodity-add">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </span>
      </a>
    )
  }
})
