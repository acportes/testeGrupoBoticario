import { combineReducers } from 'redux'
import { reducer as toastrReducer, toastr } from 'react-redux-toastr'

import DashBoardReducer from '../dashboard/dashboardReducer'
import LoginReducer from '../auth/loginReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    toastr: toastrReducer,
    auth : LoginReducer
})

export default rootReducer