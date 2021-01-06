import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { parseJSONError } from '../utils/utils'

import { getDealersFromSessionStorage, setDealersInSessionStorage } from '../utils/storageManager'

const BASE_URL = 'http://localhost:3030/dealers'

export function getSummary(token) {

    var listDealers = getDealersFromSessionStorage()

    return dispatch => {
        if (listDealers == null) {
            axios.get(BASE_URL).then((response) => {
                setDealersInSessionStorage(response.data)
                dispatch({
                    type: 'FETCH_DASHBOARD',
                    payload: response.data
                })
            }).then((error) => {
                var message = parseJSONError(error)
                toastr.error(`Ocorreu um erro ao efetuar o login : ${message}`)
            })
        } else {
            //Transforma o objeto JSON em um array
            var listJSONDealers = JSON.parse(listDealers)
            var arrayDealers = Object.keys(listJSONDealers).map(function (k) {
                return listJSONDealers[k];
            });
            dispatch({
                type: 'FETCH_DASHBOARD',
                payload: arrayDealers
            })
        }
    }
}