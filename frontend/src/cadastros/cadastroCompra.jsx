import React from 'react'

import Content from '../common/template/content'

export default props => (
    <div>
        <Content>
            <legend>Cadastro de Compra</legend>
            <form role='form'>
                <div className='row'>
                    <div className='box box-primary'>
                        <div className='box-body'>
                            <div className='form-group'>
                                <label>Revendedor</label>
                                <select className='form-control'>
                                    <option>Revendedor X</option>
                                    <option>Revendedor Y</option>
                                    <option>Revendedor Z</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Código</label>
                                <input type='string'
                                    className='form-control'
                                    placeholder='Informe o código'></input>
                            </div>
                            <div className='form-group'>
                                <label>Valor</label>
                                <input type='decimal'
                                    className='form-control'
                                    placeholder='Informe o valor'></input>
                            </div>
                            <div className='form-group'>
                                <label>Data</label>
                                <div className='input-group date'>
                                    <div className='input-group-addon'>
                                        <i className='fa fa-calendar'></i>
                                    </div>
                                    <input type="text"
                                        class='form-control pull-right'
                                        id='datepicker'
                                        pattern='\d{1,2}/\d{1,2}/\d{4}'></input>
                                </div>
                            </div>
                        </div>
                        <div className='box-footer'>
                            <button type='submit' className='btn btn-primary'
                                style={{ minWidth: '100px' }}>Salvar</button>
                            <button type='button' className='btn btn-default'
                                style={{ minWidth: '100px' }}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </form>
        </Content>
    </div>
)