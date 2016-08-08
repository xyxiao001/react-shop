import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from 'views/Home'
import Find from 'views/Find'
import Carts from 'views/Carts'
import Inte from 'views/Inte'
import Exchange from 'views/Exchange'
import Integral from 'views/Integral'
import Detail from 'views/CommodityDetail'
import FindDetail from 'views/FindDetail'
import ShopDetail from 'views/ShopDetail'
import Order from 'views/Order'
import Address from 'views/Address'
import AddressEdit from 'views/AddressEdit'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/Find' component={Find} />
    <Route path='/Carts' component={Carts} />
    <Route path='/Inte' component={Inte}>
      <Route path='/Inte/Exchange' component={Exchange} />
      <Route path='/Inte/integral' component={Integral} />
    </Route>
    <Route path='/Detail' component={Detail} />
    <Route path='/FindDetail' component={FindDetail} />
    <Route path='/ShopDetail' component={ShopDetail} />
    <Route path='/Order' component={Order} />
    <Route path='/Address' component={Address} />
    <Route path='/AddressEdit' component={AddressEdit} />
    <Route path='*' component={Home} />
  </Router>
), document.getElementById('app'))
