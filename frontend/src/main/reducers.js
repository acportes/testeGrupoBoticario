import { combineReducers } from 'redux'
import { reducer as toastrReducer, toastr } from 'react-redux-toastr'

import DashBoardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    toastr: toastrReducer,
})

export default rootReducer