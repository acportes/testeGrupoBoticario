import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import { getSummary } from '../dashboard/dashboardActions'
import consts from '../utils/consts'


function applyCustomTextColor(status){
    if(status == consts.CASHBACK_STATUS_APROVADO)
        return 'text-approved'
    else if(status == consts.CASHBACK_STATUS_REPROVADO)
        return 'text-repproved'
    else
        return 'text-inanalysis'
}

class ConsultaCompraList extends Component {

    componentDidMount() {
        this.props.getSummary()
    }

    renderRows() {
        const listDealers = this.props.listDealers || []
        const listPurchases = []
        listDealers.forEach(dl => {
            listPurchases.push(dl.Purchases)
        });

        return listPurchases.flat().map(obj => (
            <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{`R$ ${+(Math.floor((obj.value * 100) / 100))}`}</td>
                <td>{obj.date}</td>
                <td>{obj.Cashback.cashBackPercent}</td>
                <td>{`R$ ${obj.Cashback.cashBackValue}`}</td>
                <td className={applyCustomTextColor(obj.Cashback.status)}>{obj.Cashback.status}
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Content>
                <div className='box-body'>
                    <div className='dataTables_wrapper form-inline dt-bootstrap'>
                        <div className='row'>
                            <div className='col-sm-6'></div>
                            <div className='col-sm-6'></div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <table className='table table-bordered table-hover dataTable'
                                    role='grid'>
                                    <thead>
                                        <tr role='row'>
                                            <th>Código</th>
                                            <th>Valor compra</th>
                                            <th>Data</th>
                                            <th>%Cashback</th>
                                            <th>Valor Cashback</th>
                                            <th>Status Cadastro</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}

const mapStateToProps = state => ({
    listDealers: state.dashboard.listDealers
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ConsultaCompraList)