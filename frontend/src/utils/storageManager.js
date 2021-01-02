import consts from '../utils/consts'

export function getDealersFromSessionStorage(){

    var dealers = sessionStorage.getItem(consts.LIST_DEALERS)
    return dealers
}

export function setDealersInSessionStorage(listDealers){
    sessionStorage.setItem(consts.LIST_DEALERS,JSON.stringify(listDealers))
}