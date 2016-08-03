import React from 'react'
import { Link } from 'react-router'
import './index.scss'

export default React.createClass({
  // 属性校验
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <Link className="commodity-item" to={{ pathname: '/detail', query: { id: this.props.item.id } }}>
        <img src={this.props.item.img} alt={this.props.item.title} />
        <p className="commodity-name">{this.props.item.title}</p>
        <p className="commodity-num">{this.props.item.jf_price} <span>积分</span></p>
        <span className="commodity-add">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </span>
      </Link>
    )
  }
})
