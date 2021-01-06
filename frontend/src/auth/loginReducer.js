import { setUser, getUser, removeUserKey} from '../utils/storageManager'

const INITIAL_STATE = {
    user: JSON.parse(getUser()),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {

        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                removeUserKey()
                return { ...state, validToken: false, user: null }
            }

        case 'USER_FETCHED':
            setUser(JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}