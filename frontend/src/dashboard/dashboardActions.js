import axios from 'axios'

import { getDealersFromSessionStorage, setDealersInSessionStorage } from '../utils/storageManager'

const BASE_URL = 'http://localhost:3030/dealers'

export function getSummary(){
    
    var listDealers = getDealersFromSessionStorage()

    return dispatch => {
        if(listDealers == null){
            axios.get(BASE_URL).then((response) => {
                setDealersInSessionStorage(response.data)
                dispatch({
                    type: 'FETCH_DASHBOARD',
                    payload: response.data
                })
            })
        }else{
            //Transforma o objeto JSON em um array
            var listJSONDealers = JSON.parse(listDealers)
            var arrayDealers = Object.keys(listJSONDealers).map(function(k) {
                return listJSONDealers[k];
              });
            dispatch({
                type: 'FETCH_DASHBOARD',
                payload: arrayDealers
            })
        }
    }
}