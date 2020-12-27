import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='home' />
        <MenuTree label='Cadastros' icon='edit'>
            <MenuItem path='#cadastroRevendedor' label='Revendedor' icon='user' />
        </MenuTree>
    </ul>
)