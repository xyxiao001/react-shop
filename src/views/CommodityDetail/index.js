import React from 'react'
import { Link } from 'react-router'
import { message } from 'antd'

// 导入组件
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'
import { GetData, PostData } from '../ajax'
import { setOrder } from '../saveOrder'

import './index.scss'

export default React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      detail: {
        item_img: [],
        num: 1
      }
    }
  },
  createOrder() {
    var self = this
    // 存商品信息
    var items = []
    items.push(
      {
        item_id: self.state.detail.id,
        num: self.state.num
      }
    )
    setOrder(JSON.stringify(items))
    // 跳转到订单预览页
    self.context.router.push({
      pathname: '/order'
    })
  },
  componentDidMount() {
    const self = this
    GetData('m=Item&a=detail&id=' + this.props.location.query.id, function (data) {
      self.setState({
        detail: data.data
      })
    })
  },
  render() {
    function addCarts(e) {
      var id = e.target.name
      PostData('m=Cart&a=add', {data: {item_id: id, num: 1}}, function (data) {
        message.success('添加成功!', 0.75)
      })
    }
    return (
      <div className="wrap">
        <Top title="商品详情页" />
        <div className="detail">
          <SlideWrap slides={this.state.detail.item_img} />
          <div className="detail-inte">
            <p className="detail-name">{this.state.detail.title}</p>
            <p>
              <span className="integral">{this.state.detail.jf_price}积分</span>
              <span className="pull-right">剩余: <span className="my-integral">{this.state.detail.user_credit}积分</span></span>
            </p>
          </div>
          <div className="detail-info">
            <div className="detail-title">
              商品详情
            </div>
            <div className="detail-content">
              {this.state.detail.intro}
            </div>
          </div>
          <div className="detail-info">
            <div className="detail-title">
              物流说明
            </div>
            <div className="detail-content" dangerouslySetInnerHTML={{__html: this.state.detail.info}} />
          </div>
        </div>
        <Link to='/'><span className='back'>首页</span></Link>
        <div className="bottom">
          <a name={this.state.detail.id} onClick={addCarts}>加入购物车</a>
          <a onClick={this.createOrder} >立即兑换</a>
        </div>
      </div>
    )
  }
})
