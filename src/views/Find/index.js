import React from 'react'
import { Link } from 'react-router'

// 导入组件
import Navbar from 'components/Navbar'
import Top from 'components/Top'
import Commodity from 'components/Commodity'
import Mark from 'components/Mark'
import { GetData } from '../ajax'

import './index.scss'

const Menu = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className="find-menu">
        <Link to={{ pathname: '/findDetail', query: { id: this.props.item.id } }}>
          <img src={this.props.item.src} alt="this.props.item.id"></img>
        </Link>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      findMenus: [
        {id: 1, src: 'src/assets/menu1.png'},
        {id: 2, src: 'src/assets/menu2.png'},
        {id: 3, src: 'src/assets/menu3.png'},
        {id: 4, src: 'src/assets/menu4.png'}
      ],
      hots: [
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
  componentDidMount() {
    var self = this
    GetData('m=Find&a=index', (data) => {
      self.setState({
        findMenus: data.findMenus,
        hots: data.hots
      })
    })
  },
  render() {
    var menus = []
    this.state.findMenus.forEach((findMenu) => {
      menus.push(
        <Menu item={findMenu} key={findMenu.id} />
      )
    })
    // 推荐商品的3个
    var hots = []
    this.state.hots.forEach((hot) => {
      hots.push(
        <Commodity key={hot.id} item={hot} />
      )
    })
    return (
      <div className="wrap">
        <Top title="发现" />
        <div className="find-list">
          {menus}
        </div>
        <Mark name={'推荐商品'} />
        <div className="commodity-list">
          {hots}
        </div>
        <Navbar />
      </div>
    )
  }
})
