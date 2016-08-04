import React from 'react'
import { Icon, Button } from 'antd'

import Top from 'components/Top'
import './index.scss'

export default React.createClass({
  render() {
    const self = this
    function focusMsg() {
      self.refs.msg.style.height = '100px'
    }
    function blurMsg() {
      self.refs.msg.style.height = '60px'
    }
    return (
      <div className="wrap">
        <Top title='待确认订单' />
        <div className="order">
          <div className="address">
            <div className="address-bg" />
            <div className="adress-item">
              <div className="left">
                <p className="consignee">
                  <Icon type="environment-o" />
                  <span>收货人: 露露西</span>
                  <span className="phone">电话: 15549402630</span>
                </p>
                <p className="receipt-address">
                  <span>收货地址: 浙江省杭州市下城区环城北路137号</span>
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
        </div>
      </div>
    )
  }
})
