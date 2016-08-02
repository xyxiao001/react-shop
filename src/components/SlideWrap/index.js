import React from 'react'
import { Carousel } from 'antd';

// 导入样式
import './index.scss'
export default React.createClass({
  // 属性校验
  propTypes: {
    slides: React.PropTypes.array
  },
  render() {
    var rows = []
    this.props.slides.forEach((slide) => {
      rows.push(
        <a className="slide-item" key={slide.id}>
          <img src={slide.src} alt={slide.id} />
        </a>
      )
    })
    return (
      <section className="slide">
        <Carousel>
          {rows}
        </Carousel>
      </section>
    )
  }
})
