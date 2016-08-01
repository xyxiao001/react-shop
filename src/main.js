import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from 'views/Home'
import Find from 'views/Find'
import Carts from 'views/Carts'
import Integral from 'views/Integral'
import Detail from 'views/CommodityDetail'
import FindDetail from 'views/FindDetail'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/Find' component={Find} />
    <Route path='/Carts' component={Carts} />
    <Route path='/Integral' component={Integral} />
    <Route path='/Detail' component={Detail} />
    <Route path='/FindDetail' component={FindDetail} />
  </Router>
), document.getElementById('app'))
