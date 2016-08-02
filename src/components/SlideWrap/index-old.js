import React from 'react'
import $ from 'jquery'

// 导入样式
import './index.scss'
export default React.createClass({
  // 属性校验
  propTypes: {
    slides: React.PropTypes.array
  },
  // dom 文档挂载后执行
  componentDidMount() {
    // 设置容器宽度
    const slideWrap = $('.slideWarp .slide-item').length
    var slideWidth = slideWrap * 100
    $('.slideWarp').css({width: slideWidth + '%'})
    $('.slide-item').css({width: 100 / slideWrap + '%'})
    // 生成轮播控件
    for (var i = 0; i < this.props.slides.length; i++) {
      $('ul.show-control').append('<li></li>')
    }
    // 默认第一个轮播被选中
    document.querySelector('.show-control li').className = 'choose'
    var showId = 0
    var slide = document.querySelector('.slideWarp')
    var self = this
    this.setSlide = setInterval(function () {
      if (showId < slideWrap - 1) {
        showId = showId + 1
        var goLeft = -(showId * 100) + '%'
        $(slide).animate({left: goLeft})
        $('.show-control li').eq(showId).addClass('choose').siblings().removeClass('choose')
      } else {
        showId = 0
        $(slide).animate({left: '0px'})
        $('.show-control li').eq(0).addClass('choose').siblings().removeClass('choose')
      }
    }, 3500)
    $('.show-control li').click(function () {
      $(this).addClass('choose').siblings().removeClass('choose')
      showId = $(this).index()
      var goLeft = -(showId * 100) + '%'
      $(slide).animate({left: goLeft})
    })
    $(function () {
      var startX, endX, go, old
      // 屏幕大小
      var page = document.body.clientWidth
      var el = document.querySelectorAll('.slide-item')
      for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('touchstart', touchStart, false)
        el[i].addEventListener('touchmove', touchMove, false)
        el[i].addEventListener('touchend', touchEnd, false)
      }
      function touchStart(event) {
        // 当用户按压屏幕 清除自动轮播
        clearInterval(self.setSlide)
        // 横坐标
        startX = event.touches[0].clientX
        // 本来有的
        old = slide.style.left || '00'
        old = old.substring(0, old.length - 1)
      }
      function touchMove(event) {
        endX = event.touches[0].clientX
        // 需要移动百分比
        go = (endX - startX) / page * 100
        var goes = Number(go) + Number(old)
        slide.style.left = (goes) + '%'
      }

      function touchEnd(event) {
        if (go < 0) {
          go = ~(go)
          // 需要前进次数
          var goId
          var l = String(go / 100).substring(3, 2)
          if (l >= 2) {
            goId = Math.ceil(go / 100)
          } else {
            goId = Math.floor(go / 100)
          }
          showId = showId + goId
          if (showId > slideWrap - 1) {
            showId = 4
          }
        } else {
          if (showId !== 0) {
            // 需要后退次数
            l = String(go / 100).substring(3, 2)
            if (l >= 2) {
              goId = Math.ceil(go / 100)
            } else {
              goId = Math.floor(go / 100)
            }
            showId = showId - goId
            showId = showId > 0 ? showId : 0
          }
        }
        showId = showId < slideWrap - 1 ? showId : slideWrap - 1
        var goLeft = -(showId * 100) + '%'
        $(slide).animate({left: goLeft})
        $('.show-control li').eq(showId).addClass('choose').siblings().removeClass('choose')
      }
    })
  },
  componentWillUnmount() {
    // 切换页面上 清除轮播
    clearInterval(this.setSlide)
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
        <div className="slideWarp">
          {rows}
        </div>
        <div className="item-control">
          <ul className="show-control" />
        </div>
      </section>
    )
  }
})
