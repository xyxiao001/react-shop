import React from 'react'
import { Checkbox, Button } from 'antd'

// 导入样式
import './index.scss'

// 导入组件
import Top from 'components/Top'

export default React.createClass({
  render() {
    return (
      <div className='wrap'>
        <Top title='添加新地址' />
        <div className='addressInput'>
          <p>收货人：<input type='text' /></p>
          <p>联系电话：<input type='text' /></p>
          <p>所在地区：<input type='text' /></p>
          <p>街道：<input type='text' /></p>
          <p><textarea type='text' rows='5' placeholder='详细地址' /></p>
        </div>
        <div className='defaultAd'>
          <p><span>设为默认地址</span><Checkbox>Checkbox</Checkbox></p>
        </div>
        <div className='addressBtn'>
          <Button className='btn btn-block addressBtn'>保存</Button>
        </div>
      </div>
    )
  }
})
