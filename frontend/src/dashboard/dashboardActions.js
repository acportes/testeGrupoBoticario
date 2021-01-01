import axios from 'axios'
const BASE_URL = 'http://localhost:3030/dealers'

export function getSummary() {

    const request = axios.get(BASE_URL)
    return {
        type: 'FETCH_DASHBOARD',
        payload: request
    }
}