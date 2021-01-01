import React from 'react'

export default props => (

    <div className='box-footer'>
        <div className='row'>
            <div className='col-sm-4 border-right'>
                <div className='description-block'>
                    <h5 className='description-header'>{props.userSales}</h5>
                    <span className='description-text'>COMPRAS</span>
                </div>
            </div>
            <div className='col-sm-4'>
                <div className='description-block'>
                    <h5 className='description-header'>{props.userTotalProducts}</h5>
                    <span className='description-text'>VALOR TOTAL PRODUTOS</span>
                </div>
            </div>
            <div className='col-sm-4 border-right'>
                <div className='description-block'>
                    <h5 className='description-header'>{props.userTotalCashback}</h5>
                    <span className='description-text'>CASHBACK</span>
                </div>
            </div>

        </div>
    </div>
)