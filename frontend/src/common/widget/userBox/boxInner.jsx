import React, { Component } from 'react'

export default class BoxInner extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`
        if (cols[3]) classes += ` col-lg-${cols[3]}`
        return classes
    }

    render() {
        <div className='col-sm-4 border-right'>
            <div className='description-block'>
                <h5 className='description-header'>77</h5>
                <span className='description-text'>VENDAS</span>
            </div>
        </div>
    }
}
