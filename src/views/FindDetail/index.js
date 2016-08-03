import React from 'react'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import Commodity from 'components/Commodity'

import './index.scss'

export default React.createClass({
  getInitialState() {
    return {
      name: '土特产',
      items: [
        {
          id: 100,
          img: 'http://yanxuan.nosdn.127.net/07e2057d35153f063cf042177d6a815e.png?imageView&quality=85&thumbnail=330x330',
          title: '茶香酥200克',
          jf_price: '300积分'
        },
        {
          id: 102,
          img: 'http://yanxuan.nosdn.127.net/d34867f2e905f76eb7c8f46dcb2e052f.png?imageView&quality=85&thumbnail=330x330',
          title: '带盖棉麻涤内衣收纳盒',
          jf_price: '500积分'
        },
        {
          id: 103,
          img: 'http://yanxuan.nosdn.127.net/4fb112a597732ea093df1d495587b04e.png?imageView&quality=85&thumbnail=330x330',
          title: '速干防滑沐浴拖鞋',
          jf_price: '250积分'
        }
      ]
    }
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
