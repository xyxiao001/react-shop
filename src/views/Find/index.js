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
          <img src={this.props.item.img} alt="this.props.item.id"></img>
        </Link>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      findMenus: [],
      hots: []
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
