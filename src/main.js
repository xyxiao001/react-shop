import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from 'views/Home'
import Find from 'views/Find'
import Carts from 'views/Carts'
import Integral from 'views/Integral'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/Find' component={Find} />
    <Route path='/Carts' component={Carts} />
    <Route path='/Integral' component={Integral} />
  </Router>
), document.getElementById('app'))
