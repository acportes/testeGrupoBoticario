import '../common/template/dependencies'
import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import Dashboard from '../dashboard/dashboard'
import CadastroRevendedor from '../cadastros/cadastroRevendedor/cadastroRevendedor'
import CadastroCompra from '../cadastros/cadastroCompra/cadastroCompra'
import ConsultaCompra from '../consultas/consultaCompra'

const URL = 'http://localhost:8080/'
export default props => (
    <Router>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className='content-wrapper'>
                <Switch>
                    <Route 
                        path='/'
                        exact
                        component={Dashboard}/>
                    <Route 
                        path='/cadastroRevendedor'
                        exact
                        component={CadastroRevendedor}/>
                    <Route 
                        path='/cadastroCompra'
                        exact
                        component={CadastroCompra}/>
                    <Route 
                        path='/consultaCompra'
                        exact
                        component={ConsultaCompra}/>
                </Switch>
            </div>
            <Footer />
            <Messages />
        </div>
    </Router>
)