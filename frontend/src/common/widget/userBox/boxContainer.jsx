import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalCashBack, getTotalProductsValue } from '../../../utils/utils'

import UserBox from './userBox'

class BoxContainer extends Component {

    getTotalCashBackByUser(obj){
        var list = []
        list.push(obj)
        return getTotalCashBack(list)
    }

    getTotalProductsValueByUser(obj){
        var list = []
        list.push(obj)
        return getTotalProductsValue(list)
    }

    renderUserBox(index) {
        const listDealers = this.props.listLastDealers || []

        return listDealers.map(obj => (
                <div className='col-md-4' key={obj.id}>
                    <div>
                        <UserBox userName={obj.name}
                            userSales={obj.Purchases.length}
                            userTotalCashback={`R$${this.getTotalCashBackByUser(obj)}`}
                            userTotalProducts={`R$${this.getTotalProductsValueByUser(obj)}`}
                            userPhotoURL=''
                            bgColor='bg-aqua-active'
                        />
                    </div>
                </div>
            )
        )
    }

    render() {
        return (
            <div className='row' style={{ marginLeft: '1px', marginRight: '1px' }}>
                {this.renderUserBox()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ listLastDealers: state.dashboard.listLastDealers })
export default connect(mapStateToProps)(BoxContainer)