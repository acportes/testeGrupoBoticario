import '../common/template/dependencies'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Login from '../auth/login'
import App from '../main/app'
import { validateToken } from '../auth/loginActions'

class DashBoardOrLogin extends Component {

    componentDidMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {

            //Configura o HEADER default do AXIOS para informar o token em cada requisição
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.auth.user.token
            
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            return <Login />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardOrLogin)