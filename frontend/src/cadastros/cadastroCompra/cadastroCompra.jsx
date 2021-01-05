import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputMask from "react-input-mask";
import { toastr } from 'react-redux-toastr'
import moment from "moment";
import NumberFormat from 'react-number-format';

import Content from '../../common/template/content'
import { getSummary } from '../../dashboard/dashboardActions'
import { getCashBackPercentByPurchaseValue } from '../../utils/utils'
import consts from '../../utils/consts'
import { getDealersFromSessionStorage, setDealersInSessionStorage } from '../../utils/storageManager'

class CadastroCompra extends Component {

    constructor() {
        super()
        this.handleChangeDealer = this.handleChangeDealer.bind(this)
        this.handlePurchaseValue = this.handlePurchaseValue.bind(this)
        this.handlePurchaseDate = this.handlePurchaseDate.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.state = {
            listDealers : null,
            dealerName: '',
            dealerID: 1,
            purchaseValue:  '0000.00',
            purchaseDate: moment().format("DD-MM-YYYY")
        }
    }

    componentDidMount() {
        this.props.getSummary()
    }

    handleChangeDealer(e) {
        this.setState({
            ...this.state,
            dealerName: e.target.value,
            dealerID: e.nativeEvent.target.selectedIndex + 1
        })
    }

    handlePurchaseValue(e) {
        this.setState({
            ...this.state,
            purchaseValue: e.target.value
        })
    }

    handlePurchaseDate(e) {
        this.setState({
            ...this.state,
            purchaseDate: e.target.value
        })
    }

    validateForm() {

        //Valida a data
        var dateValidate = this.state.purchaseDate.split('/')

        if (dateValidate[0] > 31) {
            toastr.error('Data inválida : O dia é maior que 31!')
            return false
        }

        if (dateValidate[0] > 289 && dateValidate[1] === '02') {
            toastr.error('Data inválida : O mês de fevereiro pode conter até 29 dias!')
            return false
        }

        if (dateValidate[1] > 12) {
            toastr.error('Data inválida : O mês não pode ser maior que 12!')
            return false
        }

        //Valida o valor da compra
        if (this.state.purchaseValue === 'R$ 0000.00') {
            toastr.error('O valor da compra não pode ser R$0!')
            return false
        }
        if(this.state.purchaseValue === ''){
            toastr.error('O valor da compra não pode ser R$0!')
            return false
        }

        return true
    }

    createPurchaseObject() {
        var purchaseObject = {}

        //Busca o total de compras do revendedor para descobrir o proximo index 
        var nextPurchaseIndex = this.findPurchaseNextID()

        //Busca a porcentagem de cashback baseado no valor da compra
        var cashbackPercent = getCashBackPercentByPurchaseValue(this.state.purchaseValue)

        purchaseObject = {
            id: nextPurchaseIndex,
            value: this.state.purchaseValue,
            date: this.state.purchaseDate,
            Cashback: {
                id: 1,
                status: consts.CASHBACK_STATUS_EM_VALIDACAO,
                cashBackPercent: cashbackPercent,
                cashBackValue: +(this.state.purchaseValue / 100 * cashbackPercent)
            }
        }

        return purchaseObject
    }

    findPurchaseNextID() {
        var list = null

        if(this.state.listDealers == null)
            list = this.props.listDealers
        else
            list = this.state.listDealers

        var dealer = list.find(x => x.id === this.state.dealerID)
        return dealer.Purchases.length + 1
    }

    savePurchaseDealerInCache(purchaseObject) {

        try{
            var listDealers = getDealersFromSessionStorage()
            var jsonList = JSON.parse(listDealers)
            var arrayDealers = Object.keys(jsonList).map(function (k) {
                return jsonList[k];
            });
    
            var selectedDealer = arrayDealers.find(x => x.id === this.state.dealerID)
    
            //Insere a compra na lista de compras do revendedor
            selectedDealer.Purchases.push(purchaseObject)

            //Atualiza o cache
            setDealersInSessionStorage(jsonList)

            toastr.success('Compra registrada com sucesso!')

            return jsonList

        }catch(e){
            return null
        }   
    }
    
    onSave() {
        //Valida o formulário
        if (this.validateForm()) {

            //Cria o objeto Purchase, que será adicionado às compras existentes do vendedor
            var purchaseObject = this.createPurchaseObject()

            //Salva os dados no cache
            var saved = this.savePurchaseDealerInCache(purchaseObject)
            if(saved){
                this.setState({
                    listDealers: saved
                })
            }else{
                toastr.error('Não foi possível registrar a compra!')
            }
        }
    }

    onCancel() {
        location.href = '/'
    }

    populateComboBox() {
        const listDealers = this.props.listDealers || []
        return listDealers.map(obj => (
            <option key={obj.id}>{obj.name}</option>
        ))
    }

    render() {
        return (<div>
            <Content>
                <legend>Cadastro de Compra</legend>
                <form role='form'>
                    <div className='row'>
                        <div className='box box-primary'>
                            <div className='box-body'>
                                <div className='form-group'>
                                    <label>Revendedor</label>
                                    <select className='form-control'
                                        onChange={this.handleChangeDealer}>
                                        {this.populateComboBox()}
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label>Valor</label>
                                    <InputMask className='form-control'
                                        mask='9999.99'
                                        alwaysShowMask={true}
                                        onChange={this.handlePurchaseValue}
                                        value={this.state.purchaseValue}/>
                                </div>
                                <div className='form-group'>
                                    <label>Data</label>
                                    <div className='input-group date'>
                                        <div className='input-group-addon'>
                                            <i className='fa fa-calendar'></i>
                                        </div>
                                        <InputMask mask="99/99/9999"
                                            className='form-control pull-right'
                                            onChange={this.handlePurchaseDate}
                                            value={this.state.purchaseDate} >
                                        </InputMask>

                                    </div>
                                </div>
                            </div>
                            <div className='box-footer'>
                                <button type='submit' className='btn btn-primary'
                                    style={{ minWidth: '100px' }}
                                    onClick={() => this.onSave()}>Salvar</button>
                                <button type='button' className='btn btn-default'
                                    style={{ minWidth: '100px' }}
                                    onClick={() => this.onCancel()}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Content>
        </div>)

    }

}

const mapStateToProps = state => ({
    listDealers: state.dashboard.listDealers
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadastroCompra)