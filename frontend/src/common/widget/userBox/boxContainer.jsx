import React from 'react'

import UserBox from './userBox'

export default props => (

    <div className='row' style={{marginLeft: '1px', marginRight: '1px'}}>
        <div className='col-md-4'>
           <UserBox userName='João Francisco'
                userSales='77'
                userTotalCashback='R$ 157,80'
                userTotalProducts='302'
                userPhotoURL='https://adminlte.io/themes/AdminLTE/dist/img/user8-128x128.jpg'
                bgColor = 'bg-aqua-active'
            />

        </div>
        <div className='col-md-4'>
            <UserBox userName='Lúcia Matto'
                userSales='44'
                userTotalCashback='R$ 93,87'
                userTotalProducts='103'
                userPhotoURL='https://adminlte.io/themes/AdminLTE/dist/img/user7-128x128.jpg'
                bgColor = 'bg-aqua-active'
            />
        </div>
        <div className='col-md-4'>
            <UserBox userName='Ana Carolina'
                userSales='21'
                userTotalCashback='R$ 14,59'
                userTotalProducts='21'
                userPhotoURL='https://adminlte.io/themes/AdminLTE/dist/img/user5-128x128.jpg'
                bgColor = 'bg-aqua-active'
            />
        </div>
    </div>
)