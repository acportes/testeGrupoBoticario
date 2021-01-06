import '../common/template/dependencies'
import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import DashBoardOrLogin from '../main/dashboardOrLogin'
import Dashboard from '../dashboard/dashboard'
import CadastroRevendedor from '../cadastros/cadastroRevendedor/cadastroRevendedor'
import CadastroCompra from '../cadastros/cadastroCompra/cadastroCompra'
import ConsultaCompra from '../consultas/consultaCompra'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={DashBoardOrLogin}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path='/cadastroRevendedor' component={CadastroRevendedor} />
            <Route path='/cadastroCompra' component={CadastroCompra} />
            <Route path='/consultaCompra' component={ConsultaCompra} />
            <Redirect from='*' to='/?#'></Redirect>
        </Route>

    </Router>
)