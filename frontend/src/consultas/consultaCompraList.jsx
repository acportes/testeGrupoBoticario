import React, { Component } from 'react'

import Content from '../common/template/content'

class ConsultaCompraList extends Component {

    renderRows(){
        const list = this.props.list || []
        return list.map(obj=> (
            <tr key={obj._id}>
                <td>{obj.value}</td>
                <td>{obj.date}</td>
                <td>{obj.percentCashback}</td>
                <td>{obj.valueCashback}</td>
                <td>{obj.status}</td>
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

export default ConsultaCompraList