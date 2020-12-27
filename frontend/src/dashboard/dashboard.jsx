import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import BoxContainer from '../common/widget/userBox/boxContainer'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
        <div>
            <ContentHeader  /*small='Visão geral de CashBack'*/ />
            <Content>
                <legend>Últimos colaboradores cadastrados</legend>
              <Row>
                <BoxContainer cols='12 4' color='blue' icon='user'
                    userName='João Francisco' userRank='Revendedor Platina'/>
              </Row>
              <legend>Totalizadores</legend>
              <Row>
                <ValueBox cols='12 4' color='green' icon='money' 
                    value='R$ 266,26' text='de cashback acumulado' />
                <ValueBox cols='12 4' color='blue' icon='users' 
                    value='5' text='colaboradores cadastrados no total' />
                <ValueBox cols='12 4' color='purple' icon='bank' 
                    value='935' text='novos pedidos de cashback' />
              </Row>
            </Content>
        </div>)
    }
}
export default Dashboard