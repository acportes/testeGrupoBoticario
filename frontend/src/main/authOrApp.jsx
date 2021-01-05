import '../common/template/dependencies'
import React, { Component } from 'react'

import App from './app'
import Login from '../auth/login'


class AuthOrAPP extends Component {
    render() {
        return <App>{this.props.children}</App>
    }
}
export default AuthOrAPP