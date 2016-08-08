import React from 'react'
import { Link } from 'react-router'
import { message, Modal, Icon } from 'antd'

// 导入组件
import Top from 'components/Top'
import SlideWrap from 'components/SlideWrap'
import { GetData, PostData } from '../ajax'
import { setOrder } from '../saveOrder'

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
      detail: {
        item_img: []
      },
      id: 1,
      num: 1,
      showCart: false
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
    const self = this
    function showCarts(e) {
      self.setState({
        showCart: true,
        id: e.target.name
      })
    }
    function subCarts(e) {
      PostData('m=Cart&a=add', {data: {item_id: self.state.id, buy_num: self.state.num}}, function (data) {
        if (data.code === 1) {
          message.success('添加成功!', 0.75)
          self.setState({
            showCart: false
          })
        } else {
          message.error('添加失败!' + data.msg, 0.75)
        }
      })
    }
    function createOrder() {
      // 存商品信息
      var items = []
      items.push(
        {
          item_id: self.state.detail.id,
          num: self.state.num
        }
      )
      setOrder(JSON.stringify(items))
      // 跳转到订单预览页
      self.context.router.push({
        pathname: '/order'
      })
    }
    function closeShowCart() {
      self.setState({
        showCart: false
      })
    }
    function addNum() {
      var num = self.state.num + 1
      self.setState({
        num: num
      })
    }
    function minusNum() {
      var num = self.state.num - 1
      if (num < 1) {
        message.error('至少添加一件商品', 0.5)
      } else {
        self.setState({
          num: num
        })
      }
    }
    function changeNum() {}
    return (
      <div className="wrap">
        <Top title="商品详情页" />
        <div className="detail">
          <SlideWrap slides={this.state.detail.item_img} />
          <div className="detail-inte">
            <p className="detail-name">{this.state.detail.title}</p>
            <p>
              <span className="integral">{this.state.detail.jf_price}积分</span>
              <span className="pull-right">剩余: <span className="my-integral">{this.state.detail.user_credit}积分</span></span>
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
        <Link to='/carts'><span className='back'>购物车</span></Link>
        <div className="bottom">
          <a name={this.state.detail.id} onClick={showCarts}>加入购物车</a>
          <a onClick={showCarts} >立即兑换</a>
        </div>
        <Modal
          title="选择数量规格"
          wrapClassName="vertical-center-modal"
          visible={this.state.showCart}
          onOk={subCarts}
          onCancel={closeShowCart}>
          <div className="show-num">
            <div className="num-select">
              <div className="num-reduce">
                <Icon type="minus" onClick={minusNum} />
              </div>
              <div className="num-show">
                <input type="number" value={this.state.num} onChange={changeNum} />
              </div>
              <div className="num-add">
                <Icon type="plus" onClick={addNum} />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          title="选择数量规格"
          wrapClassName="vertical-center-modal"
          visible={this.state.showCart}
          onOk={createOrder}
          onCancel={closeShowCart}>
          <div className="show-num">
            <div className="num-select">
              <div className="num-reduce">
                <Icon type="minus" onClick={minusNum} />
              </div>
              <div className="num-show">
                <input type="number" value={this.state.num} onChange={changeNum} />
              </div>
              <div className="num-add">
                <Icon type="plus" onClick={addNum} />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
})
