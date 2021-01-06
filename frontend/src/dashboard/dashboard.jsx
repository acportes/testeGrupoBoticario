import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import BoxContainer from '../common/widget/userBox/boxContainer'
import Row from '../common/layout/row'
import { getSummary } from './dashboardActions'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary(this.props.auth.user.token)
    }

    render() {
        return (
            <div>
                <Content>
                    <legend>Últimos colaboradores cadastrados</legend>
                    <Row>
                        <BoxContainer cols='12 4' />
                    </Row>
                    <legend>Totalizadores</legend>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='money'
                            value={`R$${this.props.totalCashBack}`}
                            text='de cashback acumulado' />
                        <ValueBox cols='12 4' color='blue' icon='usaers'
                            value={this.props.totalDealers}
                            text='colaboradores cadastrados no total' />
                        <ValueBox cols='12 4' color='purple' icon='bank'
                            value={this.props.totalNewCashBackOrders}
                            text='novos pedidos de cashback (Em Validação)' />
                    </Row>
                </Content>
            </div>)
    }
}
const mapStateToProps = state => ({
    listDealers: state.dashboard.listDealers,
    listLastDealers: state.dashboard.listLastDealers,
    totalCashBack: state.dashboard.totalCashBack,
    totalDealers: state.dashboard.totalDealers,
    totalNewCashBackOrders: state.dashboard.totalNewCashBackOrders,
    auth: state.auth
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)