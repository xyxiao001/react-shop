import React from 'react'
import { Link } from 'react-router'
import { Radio, Button, Icon } from 'antd'

// 导入样式
import './index.scss'

// 导入组件
import Top from 'components/Top'
import { GetData } from '../ajax'

var AddressBox = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='addressBox'>
        <div className='addressMsg'>
          <p><span style={{fontSize: '16px'}}>{this.props.item.consignee}</span><span>{this.props.item.mobile}</span></p>
          <p>{this.props.item.sheng}</p>
        </div>
        <div className='addressEdit'>
          <p>
            <Radio>默认地址</Radio>
            <div className='pull-right'>
              <Link to='/addressEdit'><Icon type="edit" /> 编写</Link><a><Icon type="delete" /> 删除</a>
            </div>
          </p>
        </div>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      addresses: []
    }
  },
  componentDidMount() {
    var self = this
    GetData('m=Order&a=addressList', (reponse) => {
      self.setState({
        addresses: reponse.data
      })
    })
  },
  render() {
    var addresses = []
    this.state.addresses.forEach((address) => {
      addresses.push(
        <AddressBox item={address} key={address.id} />
      )
    })
    return (
      <div className='wrap'>
        <Top title='管理收货地址' />
        <div>
          {addresses}
        </div>
        <div className='addressBtn'>
          <Button className='btn btn-block addressBtn'><Link to='/addressEdit'>添加新地址</Link></Button>
        </div>
        <Link to='/integral'><span className='back'>返回</span></Link>
      </div>

    )
  }
})
