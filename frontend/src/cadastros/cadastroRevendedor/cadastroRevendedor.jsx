import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputMask from "react-input-mask";
import { cpf } from 'cpf-cnpj-validator';

import Content from '../../common/template/content'
import { getSummary } from '../../dashboard/dashboardActions'
import { toastr } from 'react-redux-toastr';
import { getDealersFromSessionStorage, setDealersInSessionStorage } from '../../utils/storageManager'

class CadastroRevendedor extends Component {

    constructor() {
        super()
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeCPF = this.handleChangeCPF.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.state = {
            listDealers: null,
            dealerName: '',
            dealerCPF: '___.___.___-__',
            dealerEmail: '',
            dealerPassword: ''
        }
    }

    componentDidMount() {
        this.props.getSummary()
    }

    handleChangeName(e) {
        this.setState({
            ...this.state,
            dealerName: e.target.value
        })
    }

    handleChangeCPF(e) {
        this.setState({
            ...this.state,
            dealerCPF: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            ...this.state,
            dealerEmail: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            ...this.state,
            dealerPassword: e.target.value
        })
    }

    validateName(name) {
        if (name === '')
            return false

        var pattern = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)

        return pattern.test(name)
    }

    validateCPF(dealerCPF) {
        if (dealerCPF === '___.___.___-__')
            return false

        var onlyCPF = dealerCPF.replace('_', '').replace('.', '').replace('-', '')
        return cpf.isValid(onlyCPF)
    }

    dealerExists() {
        var exists = this.props.listDealers.find(x => x.cpf === this.state.dealerCPF)

        if (exists)
            return true
    }


    validateForm() {

        var name = this.state.dealerName
        var cpf = this.state.dealerCPF

        if (!this.validateName(name)) {
            toastr.error('Nome inválido!')
            return false
        }

        if (!this.validateCPF(cpf)) {
            toastr.error('CPF inválido!')
            return false
        }

        return true;

    }

    createDealerObject() {
        var nextDealerIndex = this.props.listDealers.length + 1

        var newDealer = {
            id: nextDealerIndex,
            name: this.state.dealerName,
            cpf: this.state.dealerCPF,
            email: this.state.dealerEmail,
            password: this.state.dealerPassword,
            Purchases: []
        }

        return newDealer
    }

    saveNewDealerInCache(dealerObject) {

        try{
            var listDealers = getDealersFromSessionStorage()
            var jsonList = JSON.parse(listDealers)
            var arrayDealers = Object.keys(jsonList).map(function (k) {
                return jsonList[k];
            });

            //Insere o novo Revendedor
            arrayDealers.push(dealerObject)
            
            //Atualiza o cache
            setDealersInSessionStorage(arrayDealers)

            toastr.success('Revendedor registrado com sucesso!')

            return jsonList

        }catch(e){
            return null
        }   
    }

    onSave() {

        //Verifica se o Revendedor já existe no sistema
        if (this.dealerExists()) {
            toastr.error('Já existe um revendedor cadastrado no sistema com este CPF!')
            return
        }

        if (this.validateForm()) {

            //Cria o objeto Dealer, que será adicionado à lista de Dealers no CACHE
            var newDealer = this.createDealerObject()

            //Salva os dados no cache
            var newListDealers = this.saveNewDealerInCache(newDealer)
            if (newListDealers) {
                this.setState({
                    listDealers: newListDealers
                })
            } else {
                toastr.error('Não foi possível registrar o revendedor!')
            }
        }
    }

    onCancel() {
        location.href = '/'
    }

    render() {
        return (
            <div>
                <Content>
                    <legend>Cadastro de Revendedor</legend>
                    <form role='form'>
                        <div className='box box-primary'>
                            <div className='box-body'>

                                <div className='form-group'>
                                    <label>Nome</label>
                                    <input type='string'
                                        className='form-control'
                                        maxLength={30}
                                        placeholder='Informe o nome'
                                        onChange={this.handleChangeName}
                                        value={this.state.dealerName}
                                    ></input>
                                </div>
                                <div className='form-group'>
                                    <label>CPF</label>
                                    <InputMask className='form-control'
                                        mask='999.999.999-99'
                                        onChange={this.handleChangeCPF}
                                        value={this.state.dealerCPF} />
                                </div>
                                <div className='form-group'>
                                    <label>E-mail</label>
                                    <input type='text'
                                        className='form-control'
                                        maxLength={30}
                                        placeholder='Informe o e-mail'
                                        onChange={this.handleChangeEmail}
                                        value={this.state.dealerEmail}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Senha</label>
                                    <input type='password'
                                        className='form-control'
                                        maxLength={20}
                                        placeholder='Informe a senha'
                                        onChange={this.handleChangePassword}
                                        value={this.state.dealerPassword}></input>
                                </div>

                            </div>
                            <div className='box-footer'>
                                <button type='submit' className='btn btn-primary'
                                    style={{ minWidth: '100px' }}
                                    onClick={this.onSave}>Salvar</button>
                                <button type='button' className='btn btn-default'
                                    style={{ minWidth: '100px' }}
                                    onClick={this.onCancel}>Cancelar</button>
                            </div>

                        </div>
                    </form>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    listDealers: state.dashboard.listDealers
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadastroRevendedor)