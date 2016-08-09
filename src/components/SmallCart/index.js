import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  componentDidMount() {
    // var back = document.querySelector('.back')
    // var x1, y1, x2, y2
    // back.addEventListener('touchstart', touchStart, false)
    // back.addEventListener('touchmove', touchMove, false)
    // function touchStart(event) {
    //   x2 = event.touches[0].clientX - back.offsetLeft
    //   y2 = event.touches[0].clientY - back.offsetTop
    // }
    //
    // function touchMove(event) {
    //   x1 = event.touches[0].clientX
    //   y1 = event.touches[0].clientY
    //   back.style.top = y1 - y2 + 'px'
    //   back.style.left = x1 - x2 + 'px'
    // }
  },
  render() {
    return (
      <Link to='/carts'><span className='back'>购物车</span></Link>
    )
  }
})
