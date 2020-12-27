import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import CadastroRevendedor from '../cadastroRevendedor/cadastroRevendedor'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/cadastroRevendedor' component={CadastroRevendedor} />
        <Redirect from='*' to='/' />
    </Router>
)