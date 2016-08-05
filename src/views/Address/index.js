import React from 'react'
import { Link } from 'react-router'
import { Radio, Button, Icon } from 'antd'

// 导入样式
import './index.scss'

// 导入组件
import Top from 'components/Top'

var AddressBox = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='addressBox'>
        <div className='addressMsg'>
          <p><span style={{fontSize: '16px'}}>{this.props.item.name}</span><span>{this.props.item.tel}</span></p>
          <p>{this.props.item.address}</p>
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
      addresses: [
        {
          id: 0,
          name: '周杰伦',
          tel: '166666666',
          address: '北京市朝阳区99号'
        },
        {
          id: 1,
          name: '李连杰',
          tel: '166666667',
          address: '北京市朝阳区199号'
        },
        {
          id: 2,
          name: '周润发',
          tel: '166666668',
          address: '北京市朝阳区299号'
        }
      ]
    }
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
