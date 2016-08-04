import React from 'react'
import { Link } from 'react-router'
import { message } from 'antd'

// 导入组件
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'
import { GetData, PostData } from '../ajax'

import './index.scss'

export default React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  getInitialState() {
    return {
      detail: {
        item_img: [
          {
            id: 100,
            src: 'http://yanxuan.nosdn.127.net/07e2057d35153f063cf042177d6a815e.png'
          },
          {
            id: 101,
            src: 'http://yanxuan.nosdn.127.net/180d4bf8a236680bc6b5ff87d151edb3.jpg'
          },
          {
            id: 102,
            src: 'http://yanxuan.nosdn.127.net/13abc2467dca21ff015e70fb0f21a201.jpg'
          },
          {
            id: 103,
            src: 'http://yanxuan.nosdn.127.net/d85d9796539dd2a67afcd7c45bf71c09.jpg'
          }
        ]
      }
    }
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
              <span className="pull-right">剩余: <span className="my-integral">586积分</span></span>
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
          <a>立即兑换</a>
        </div>
      </div>
    )
  }
})
