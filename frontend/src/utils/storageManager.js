import consts from '../utils/consts'

export function setUser(user){
    return localStorage.setItem(consts.USER_KEY, JSON.stringify(user))
}

export function getUser(){
    return localStorage.getItem(consts.USER_KEY)
}

export function removeUserKey(){
    return localStorage.removeItem(consts.USER_KEY)
}

export function getDealersFromSessionStorage(){

    var dealers = sessionStorage.getItem(consts.LIST_DEALERS)
    return dealers
}

export function setDealersInSessionStorage(listDealers){
    sessionStorage.setItem(consts.LIST_DEALERS, JSON.stringify(listDealers))
}