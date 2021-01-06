import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../utils/consts'
import { parseJSONError } from '../utils/utils'

export function login(values) {

    return dispatch => {
        axios.post(consts.API_LOGIN_ENDPOINT, values)
            .then((response) => {
                dispatch([
                    { type: 'USER_FETCHED', payload: response.data }
                ])
            }).catch((error) => {
                var jsonError = JSON.stringify(error.response.data)
                var jsonparsed = JSON.parse(jsonError)
                var message = Object.keys(jsonparsed).map(function(k) {
                    return jsonparsed[k];
                  });
                toastr.error(`Ocorreu um erro ao efetuar o login : ${message}`)
            })
        }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(consts.API_VALIDATE_TOKEN_ENDPOIT, { token })
                .then((response) => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: response.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}

