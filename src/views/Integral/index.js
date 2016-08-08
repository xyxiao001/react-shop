import React from 'react'
// 导入css
import './index.scss'

// 导入组件
import { GetData } from '../ajax'

const Integral = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  render() {
    return (
      <div className='integralBox'>
        <p><span>{this.props.item.name}</span><span className='integralPlus'>{this.props.item.value}</span><span>{this.props.item.update}</span></p>
      </div>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      integralLogs: []
    }
  },
  componentDidMount() {
    var self = this
    GetData('m=User&a=pointsList', (data) => {
      self.setState({
        integralLogs: data.data.list
      })
    })
  },
  render() {
    let integralLogs = []
    this.state.integralLogs.forEach((integralLog, index) => {
      integralLogs.push(
        <Integral item={integralLog} key={index} />
      )
    })
    return (
      <div>
        {integralLogs}
      </div>
    )
  }
})
