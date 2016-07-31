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

export default React.createClass({
  getInitialState() {
    return {
      slideList: [
        {
          id: 1,
          src: 'http://yanxuan.nosdn.127.net/1aa6bc8e2079dccfa47a10ff06028fda.jpg?imageView&quality=85&thumbnail=750x400'
        },
        {
          id: 2,
          src: 'http://yanxuan.nosdn.127.net/42e2883b47df24b039922e87f75ea30a.jpg?imageView&quality=85&thumbnail=750x400'
        },
        {
          id: 3,
          src: 'http://yanxuan.nosdn.127.net/a06041c77d04d9025dce5ce144672602.jpg?imageView&quality=85&thumbnail=750x400'
        },
        {
          id: 4,
          src: 'http://yanxuan.nosdn.127.net/65f04feaddfc6f179f793e6dffc95f57.jpg?imageView&quality=85&thumbnail=750x400'
        },
        {
          id: 5,
          src: 'http://yanxuan.nosdn.127.net/51bfd8a82909b3a6225ccf7cb2b1325a.jpg?imageView&quality=85&thumbnail=750x400'
        }
      ],
      notices: [
        '恭喜用户001成功兑换iphone6s',
        '恭喜用户002成功兑换ipad Air2',
        '恭喜用户003成功兑换ipad Air2',
        '恭喜用户004成功兑换小米5'
      ],
      hots: [
        {
          id: 100,
          src: 'http://yanxuan.nosdn.127.net/07e2057d35153f063cf042177d6a815e.png?imageView&quality=85&thumbnail=330x330',
          name: '茶香酥200克',
          num: '300积分'
        },
        {
          id: 102,
          src: 'http://yanxuan.nosdn.127.net/d34867f2e905f76eb7c8f46dcb2e052f.png?imageView&quality=85&thumbnail=330x330',
          name: '带盖棉麻涤内衣收纳盒',
          num: '500积分'
        },
        {
          id: 103,
          src: 'http://yanxuan.nosdn.127.net/4fb112a597732ea093df1d495587b04e.png?imageView&quality=85&thumbnail=330x330',
          name: '速干防滑沐浴拖鞋',
          num: '250积分'
        }
      ]
    }
  },
  render() {
    // 首页推荐的3个
    var hots = []
    this.state.hots.forEach((hot) => {
      hots.push(
        <Commodity key={hot.id} item={hot} />
      )
    })
    return (
      <div className="wrap">
        <Top title="精选" />
        <SlideWrap slides={this.state.slideList} />
        <Notice notices={this.state.notices} />
        <div className="commodity-list">
          {hots}
        </div>
        <Mark name={'限时兑换'} />
        <div className="commodity-list">
          {hots}
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
