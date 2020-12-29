import React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <body className='hold-transition login-page'>
                <div className='login-box'>
                    <div className="login-logo">
                        <b>CashBack</b>-Boticário
                    </div>
                    <div className='login-box-body'>
                        <p class="login-box-msg">Realize o LOGIN</p>
                        <form method='post'>
                            <div className='form-group has-feedback'>
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className='form-group has-feedback'>
                                <input type="password" className="form-control" placeholder="Senha" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div class='row'>
                                <div>
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        )
    }
}