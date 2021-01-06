import '../common/template/dependencies'
import React, { Component } from 'react'
import { HashRouter as Router, Switch, hashHistory } from "react-router";

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import { connect } from 'react-redux';

class App extends Component {

    render() {
        let headerClass = this.props.auth.user ? 'wrapper' : ''
        let contentClass = this.props.auth.user ? 'content-wrapper' : ''
        let header = this.props.auth.user ? <Header /> : '';
        let sideBar = this.props.auth.user ? <SideBar /> : '';
        let footer = this.props.auth.user ? <Footer /> : '';

        return (
            <div className={headerClass}>
                {header}
                {sideBar}
                <div className={contentClass}>
                    {this.props.children}
                </div>
                {footer}
                <Messages />
            </div>
        )
    }
}
const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(App)