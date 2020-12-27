import React from 'react'

export default props => (
    <header className='main-header' style={{color: 'white'}}>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>Ca$h</b></span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> Cashback</b> Revendedor
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a> </nav>
    </header>)
