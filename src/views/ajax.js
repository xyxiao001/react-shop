import $ from 'jquery'

export default function getData(url, callback) {
  $.ajax({
    type: 'GET',
    async: false,
    url: 'http://wxshop.xuanwolei.cn/index.php?' + url,
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'jsonpCallback',
    success: callback,
    error: function () {
      console.log('请求失败')
    }
  })
}
