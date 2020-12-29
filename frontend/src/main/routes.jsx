import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Login from '../auth/login'
import Dashboard from '../dashboard/dashboard'
import CadastroRevendedor from '../cadastros/cadastroRevendedor'
import CadastroCompra from '../cadastros/cadastroCompra'
import ConsultaCompra from '../consultas/consultaCompra'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/cadastroRevendedor' component={CadastroRevendedor} />
        <Route path='/cadastroCompra' component={CadastroCompra} />
        <Route path='/consultaCompra' component={ConsultaCompra} />
        <Redirect from='*' to='/' />
    </Router>
)