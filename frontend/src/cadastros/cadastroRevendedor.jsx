import React from 'react'

import Content from '../common/template/content'

export default props => (
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
                                placeholder='Informe o nome'></input>
                        </div>
                        <div className='form-group'>
                            <label>CPF</label>
                            <input type='string'
                                className='form-control'
                                placeholder='Informe o CPF'></input>
                        </div>
                        <div className='form-group'>
                            <label>E-mail</label>
                            <input type='email'
                                className='form-control'
                                placeholder='Informe o e-mail'></input>
                        </div>
                        <div className='form-group'>
                            <label>Senha</label>
                            <input type='password'
                                className='form-control'
                                placeholder='Informe a senha'></input>
                        </div>

                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'
                            style={{ minWidth: '100px' }}>Salvar</button>
                        <button type='button' className='btn btn-default'
                            style={{ minWidth: '100px' }}>Cancelar</button>
                    </div>

                </div>
            </form>
        </Content>
    </div>
)