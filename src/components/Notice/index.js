import React from 'react'

// 导入样式
import './index.scss'
export default React.createClass({
  // 属性校验
  propTypes: {
    notices: React.PropTypes.array
  },
  // dom 文档挂载后执行
  componentDidMount() {
    // 设置容器宽度
    var notice = this.props.notices.length
    document.querySelector('.show-notice').style.width = notice * 100 + '%'
  },
  render() {
    var rows = []
    this.props.notices.forEach((notice) => {
      rows.push(
        <span key={notice}>{notice}</span>
      )
    })
    return (
      <div className="notice">
        <div className="laba">
          <i className="fa fa-bullhorn" aria-hidden="true"></i>
        </div>
        <div className="show-notice">
          {rows}
        </div>
      </div>
    )
  }
})
