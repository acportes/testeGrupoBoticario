import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { login } from './loginActions'
import Messages from '../common/msg/messages'

class Login extends Component {

    constructor() {
        super()
        this.handleEmailValue = this.handleEmailValue.bind(this)
        this.handlePasswordValue = this.handlePasswordValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailValue(e) {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    handlePasswordValue(e) {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    onSubmit() {

        if(this.state.email === ''){
            toastr.error('É necessário informar o e-mail!')
            return
        }

        if(this.state.password === ''){
            toastr.error('É necessário informar a senha!')
            return
        }

        var values = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(values)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className='login-box'>
                <div className="login-logo" style={{ color: 'white' }}>
                    <b>CashBack</b>-Boticário
                </div>
                <div className='login-box-body'>
                    <p className="login-box-msg">Realize o LOGIN</p>
                    <form>
                        <div className='form-group has-feedback'>
                            <input type='text'
                                className='form-control'
                                maxLength={30}
                                placeholder='Informe o e-mail'
                                onChange={this.handleEmailValue}
                                value={this.state.email}></input>
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className='form-group has-feedback'>
                            <input type="password"
                                className="form-control"
                                placeholder="Senha"
                                onChange={this.handlePasswordValue} />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className='row'>
                            <div>
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat"
                                    onClick={this.onSubmit}>LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Messages />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Login)