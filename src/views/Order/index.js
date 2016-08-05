import React from 'react'
import { Icon, Button, Modal, Input } from 'antd'
import $ from 'jquery'

import Top from 'components/Top'
import './index.scss'

export default React.createClass({
  getInitialState() {
    return {
      showAddress: false,
      adress: 1,
      addressInfo: {
        name: '露露西',
        phone: '15549402630',
        address: '浙江省杭州市下城区环城北路137号'
      }
    }
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
        name: $('input[name="people"]').val(),
        phone: $('input[name="phone"]').val(),
        address: $('textarea[name="address"]').val()
      }
      self.setState({
        addressInfo: info,
        showAddress: false
      })
    }

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
                  <span>收货人: {this.state.addressInfo.name}</span>
                  <span className="phone">电话: {this.state.addressInfo.phone}</span>
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
            <div className="order-item">
              <div className="item-left">
                <img src="http://yanxuan.nosdn.127.net/5ed1303626871dedf14c0ace0615e33a.png?quality=90&thumbnail=200y200&imageView"></img>
              </div>
              <div className="item-right">
                <div className="r1">
                  <p>墨玉 日常妆容化妆套刷</p>
                </div>
                <div className="r2">
                  <p className="r2-num">x1</p>
                  <p className="r2-integral">500积分</p>
                </div>
              </div>
            </div>
            <div className="order-item">
              <div className="item-left">
                <img src="http://yanxuan.nosdn.127.net/1be97c3caf5e94ec851a69634c2c9ecd.png?quality=90&thumbnail=200y200&imageView"></img>
              </div>
              <div className="item-right">
                <div className="r1">
                  <p>墨玉 日常妆容化妆套刷</p>
                </div>
                <div className="r2">
                  <p className="r2-num">x1</p>
                  <p className="r2-integral">500积分</p>
                </div>
              </div>
            </div>
          </div>
          <div className="title total">
            <p>总计: <span>1000积分</span></p>
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
                  <Input type="text" name="people" defaultValue={this.state.addressInfo.name} />
                </label>
                <label>
                  <span>联系电话</span>
                  <Input type="text" name="phone" defaultValue={this.state.addressInfo.phone} />
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
