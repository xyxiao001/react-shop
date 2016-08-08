import React from 'react'
import { Link } from 'react-router'
// 导入css
import './index.scss'

// 导入组件
import { GetData } from '../ajax'

// 兑换详情
const Conversion = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <Link to={{ pathname: '/shopDetail', query: { id: this.props.item.id } }}>
        <div className="conversionBox">
          <p>单号：<span>{this.props.item.orderId}</span></p>
          <p>商品：<span>{this.props.item.title}</span><span className='send fr'>{this.props.item.status_msg}</span></p>
        </div>
      </Link>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      shops: []
    }
  },
  componentDidMount() {
    const self = this
    GetData('m=User&a=myOrder', (data) => {
      self.setState({
        shops: data.data.list
      })
    })
  },
  render() {
    var shops = []
    this.state.shops.forEach((shop) => {
      shops.push(
        <Conversion item={shop} key={shop.id} />
      )
    })
    return (
      <div>
        {shops}
      </div>
    )
  }
})
