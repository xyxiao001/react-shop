import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from 'views/Home'
import Find from 'views/Find'
import Carts from 'views/Carts'
import Integral from 'views/Integral'
import IntegralLog from 'views/IntegralLog'
import Detail from 'views/CommodityDetail'
import FindDetail from 'views/FindDetail'
import ShopDetail from 'views/ShopDetail'
import Order from 'views/Order'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/Find' component={Find} />
    <Route path='/Carts' component={Carts} />
    <Route path='/Integral' component={Integral} />
    <Route path='/IntegralLog' component={IntegralLog} />
    <Route path='/Detail' component={Detail} />
    <Route path='/FindDetail' component={FindDetail} />
    <Route path='/ShopDetail' component={ShopDetail} />
    <Route path='/Order' component={Order} />
    <Route path='*' component={Home} />
  </Router>
), document.getElementById('app'))
