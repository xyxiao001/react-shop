import React from 'react'

// 导入css
import './index.scss'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'
import Notice from 'components/Notice'

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
      ]
    }
  },
  render() {
    return (
      <div className="wrap">
        <Top title="精选" />
        <SlideWrap slides={this.state.slideList} />
        <Notice notices={this.state.notices} />
        <Navbar />
      </div>
    )
  }
})
