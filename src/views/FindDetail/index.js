import React from 'react'
import { message } from 'antd'
import $ from 'jquery'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import Commodity from 'components/Commodity'

import { GetData } from '../ajax'

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
      name: '',
      items: [],
      page: 1,
      hasChild: 0
    }
  },
  componentDidMount() {
    const self = this
    var id = this.props.location.query.id
    GetData('m=Find&a=itemList' + '&id=' + id + '&page=' + self.state.page, function (data) {
      if (data.code === 1 && data.hots !== null) {
        self.setState({
          items: data.hots,
          name: data.title
        })
      } else {
        message.error('暂无数据！请稍后再试。')
        setTimeout(() => {
          self.context.router.push({
            pathname: '/find'
          })
        }, 1500)
      }
    })
    // 滚动加载
    var loading = false
    $(document).scroll(function () {
      // 记录滚动的高度
      var top = $(window).scrollTop()
      // 当前页面高度
      var doc = $(document).height()
      // 当屏幕高度
      var screen = $(window).height()
      // 当滑动到 页面80%时 开始加载数据
      if (top + screen >= doc * 0.8 && loading === false && self.state.hasChild !== 0) {
        self.setState({
          page: self.state.page + 1
        })
        GetData('m=Find&a=itemList' + '&id=' + id + '&page=' + self.state.page, function (data) {
          self.setState({
            items: data.hots,
            name: data.title
          })
          loading = true
        })
      }
    })
  },
  render() {
    var rows = []
    this.state.items.forEach((item) => {
      rows.push(
        <Commodity key={item.id} item={item} />
      )
    })
    return (
      <div className="wrap">
        <Top title={this.state.name} />
        <div className="find-items">
          {rows}
        </div>
        <Navbar />
      </div>
    )
  }
})
