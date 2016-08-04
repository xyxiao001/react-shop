import React from 'react'

// 导入css
import './index.scss'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'
import Notice from 'components/Notice'
import Commodity from 'components/Commodity'
import Mark from 'components/Mark'
import { GetData } from '../ajax'

export default React.createClass({
  getInitialState() {
    return {
      slideList: [],
      notices: [],
      hots: [],
      limits: [],
      newItems: []
    }
  },
  componentDidMount() {
    var self = this
    GetData('m=Index&a=item', (data) => {
      self.setState({
        slideList: data.ad,
        hots: data.hots_item,
        limits: data.limit_item,
        newItems: data.new_item
      })
    })
  },
  render() {
    // 首页推荐的3个
    var hots = []
    this.state.hots.forEach((hot) => {
      hots.push(
        <Commodity key={hot.id} item={hot} />
      )
    })
    var limits = []
    this.state.limits.forEach((limit) => {
      limits.push(
        <Commodity key={limit.id} item={limit} />
      )
    })
    var newItems = []
    this.state.newItems.forEach((newItem) => {
      newItems.push(
        <Commodity key={newItem.id} item={newItem} />
      )
    })
    return (
      <div className="wrap">
        <Top title="精选" />
        <SlideWrap slides={this.state.slideList} />
        <Notice notices={this.state.notices} />
        <Mark name={'新品推荐'} />
        <div className="commodity-list">
          {newItems}
        </div>
        <Mark name={'限时兑换'} />
        <div className="commodity-list">
          {limits}
        </div>
        <Mark name={'推荐兑换'} />
        <div className="commodity-list">
          {hots}
        </div>
        <Navbar />
      </div>
    )
  }
})
