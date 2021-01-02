import {getLastDealers, getTotalCashBack, getTotalNewCashBackOrders } from '../utils/utils'
 
const INITIAL_STATE = {
    listDealers: [],
    listLastDealers: [],
    totalCashBack: 0,
    totalDealers: 0,
    totalNewCashBackOrders: 0
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FETCH_DASHBOARD':
            {
                return {
                    ...state,
                    listDealers: action.payload,
                    listLastDealers: getLastDealers(action.payload),
                    totalDealers: action.payload.length,
                    totalCashBack: getTotalCashBack(action.payload),
                    totalNewCashBackOrders: getTotalNewCashBackOrders(action.payload)
                }
            }
        default:
            return state
    }
}