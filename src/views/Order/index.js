import React from 'react'
import { Icon, Button, Modal, Input } from 'antd'
import $ from 'jquery'
import { PostData } from '../ajax'
import { getOrder } from '../saveOrder'

import Top from 'components/Top'
import './index.scss'

const Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className="order-item">
        <div className="item-left">
          <img src={this.props.item.imgSrc}></img>
        </div>
        <div className="item-right">
          <div className="r1">
            <p>{this.props.item.title}</p>
          </div>
          <div className="r2">
            <p className="r2-num">x{this.props.item.buy_num}</p>
            <p className="r2-integral">{this.props.item.jf_price}积分</p>
          </div>
        </div>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      showAddress: false,
      adress: 1,
      addressInfo: {},
      items: [],
      total: 0
    }
  },
  componentDidMount() {
    const self = this
    // 订单预览参数
    var or = JSON.parse(getOrder('order'))
    PostData('m=Order&a=preview', {data: {items: or}}, (data) => {
      console.log(data)
      self.setState({
        addressInfo: data.data.address_info,
        items: data.data.item_list,
        total: data.data.total_price
      })
    })
  },
  render() {
    const self = this
    function focusMsg() {
      self.refs.msg.style.height = '100px'
    }

    function blurMsg() {
      self.refs.msg.style.height = '60px'
    }

    function chooseAddress() {
      self.setState({
        showAddress: true
      })
    }

    function handleCancel() {
      self.setState({
        showAddress: false
      })
    }

    function changeAddress() {
      var info = {
        consignee: $('input[name="people"]').val(),
        mobile: $('input[name="phone"]').val(),
        address: $('textarea[name="address"]').val()
      }
      self.setState({
        addressInfo: info,
        showAddress: false
      })
    }

    // 渲染商品列表
    var rows = []
    this.state.items.forEach((item, index) => {
      rows.push(
        <Item key={index} item={item} />
      )
    })
    return (
      <div className="wrap">
        <Top title='待确认订单' />
        <div className="order">
          <div className="address" onClick={chooseAddress}>
            <div className="address-bg" />
            <div className="adress-item">
              <div className="left">
                <p className="consignee">
                  <Icon type="environment-o" />
                  <span>收货人: {this.state.addressInfo.consignee}</span>
                  <span className="phone">电话: {this.state.addressInfo.mobile}</span>
                </p>
                <p className="receipt-address">
                  <span>收货地址: {this.state.addressInfo.address}</span>
                </p>
              </div>
              <div className="right">
                <Icon type="right" />
              </div>
            </div>
          </div>
          <div className="title">订单商品列表</div>
          <div className="item-list">
            {rows}
          </div>
          <div className="title total">
            <p>总计: <span>{this.state.total}积分</span></p>
          </div>
          <div className="msg" ref="msg">
            <div className="left">买家留言:</div>
            <textarea
              placeholder="点击给买家留言"
              className="right"
              onFocus={focusMsg}
              onBlur={blurMsg} />
          </div>
          <div className="subOrder">
            <Button type="primary">提交订单</Button>
          </div>
          <Modal
            ref="modal"
            className="addressChoose"
            visible={this.state.showAddress}
            onCancel={handleCancel}
            style={{top: 150}}
            title="地址修改">
            <div className="address-change">
              <from>
                <label>
                  <span>收货人</span>
                  <Input type="text" name="people" defaultValue={this.state.addressInfo.consignee} />
                </label>
                <label>
                  <span>联系电话</span>
                  <Input type="text" name="phone" defaultValue={this.state.addressInfo.mobile} />
                </label>
                <label>
                  <span>收货地址</span>
                  <Input type="textarea" name="address" rows={3} defaultValue={this.state.addressInfo.address} />
                </label>
                <Button type="primary" onClick={changeAddress}>保存</Button>
              </from>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
})
