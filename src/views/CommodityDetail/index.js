import React from 'react'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'

import './index.scss'

export default React.createClass({
  getInitialState() {
    return {
      detail: {
        img: [
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
  render() {
    return (
      <div className="wrap">
        <Top title="商品详情页" />
        <div className="detail">
          <SlideWrap slides={this.state.detail.img} />
          <div className="detail-inte">
            <p className="detail-name">茶香酥</p>
            <p>
              <span className="integral">889积分</span>
              <span className="pull-right">剩余: <span className="my-integral">586积分</span></span>
            </p>
          </div>
          <div className="detail-info">
            <div className="detail-title">
              商品详情
            </div>
            <div className="detail-content">
              一份优质茶食需以好茶入料，辅以耐心烘焙，方可成就十足美味，精选
              红茶色泽熙红，独特茶香，滋味回甘。
            </div>
          </div>
          <div className="detail-info">
            <div className="detail-title">
              物流说明
            </div>
            <div className="detail-content">
              江浙沪包邮
            </div>
          </div>
          <div className="detail-control">
            <button className="btn btn-primary">加入购物车</button>
            <button className="btn btn-success">立即兑换</button>
          </div>
        </div>
        <Navbar />
      </div>
    )
  }
})
