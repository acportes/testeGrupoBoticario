import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import List from '../consultas/consultaCompraList'

class ConsultaCompra extends Component {

    useEffect(){
        
    }

    render() {
        return (
            <div>
                <ContentHeader title='Lista de compras' small='Consulta' />
                <Content>
                    <List/>
                </Content>
            </div>
        )
    }
}

export default ConsultaCompra