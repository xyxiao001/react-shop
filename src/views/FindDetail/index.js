import React from 'react'
import { message } from 'antd'

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
  getInitialState() {
    return {
      name: '',
      items: []
    }
  },
  componentDidMount() {
    const self = this
    GetData('m=Find&a=itemList' + '&id=' + this.props.location.query.id, function (data) {
      console.log(data)
      if (data.code === 1 && data.hots !== null) {
        self.setState({
          items: data.hots,
          name: data.title
        })
      } else {
        message.error('暂无数据！' + data.msg)
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
