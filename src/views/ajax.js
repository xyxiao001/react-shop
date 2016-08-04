import $ from 'jquery'

// get
export function GetData(url, callback) {
  $.ajax({
    type: 'GET',
    async: false,
    url: 'http://wxshop.xuanwolei.cn/index.php?' + url,
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'jsonpCallback',
    success: callback,
    error: function (error) {
      console.log('请求失败' + error)
    }
  })
}

// post
export function PostData(url, data, callback) {
  $.ajax({
    type: 'GET',
    async: false,
    url: 'http://wxshop.xuanwolei.cn/index.php?' + url,
    data: data,
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'jsonpCallback',
    success: callback,
    error: function (error) {
      console.log('请求失败' + error)
    }
  })
}
