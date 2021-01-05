import consts from '../utils/consts'

export function getLastDealers(listDealers) {
    return listDealers.slice(Math.max(listDealers.length - 3, 0)).reverse()
}

export function getTotalCashBack(listDealers) {
    var listCashBack = getListCashBack(listDealers)
    var sumCashBack = 0
    listCashBack.forEach(cashback => {
        sumCashBack += +(Math.floor((cashback.cashBackValue * 100)/100))
    });
    return sumCashBack
}

export function getTotalNewCashBackOrders(listDealers) {
    var listCashBack = getListCashBack(listDealers)
    var listNewCashBack = filterNewCashBack(listCashBack)
    return listNewCashBack.length
}

export function getTotalProductsValue(listDealers){
    var sumTotalProductValue = 0
    listDealers.forEach(dealer => {
       dealer.Purchases.forEach(purchase => {
           sumTotalProductValue += +(Math.floor((purchase.value * 100)/100))
       });
    });
    return sumTotalProductValue
}

export function getCashBackPercentByPurchaseValue(purchaseValue){
    if(purchaseValue < 100)
        return 10
    else if(purchaseValue > 100 && purchaseValue < 1000)
        return 5
    else
        return 2
}

function getListCashBack(listDealers){
    var listCashBack = []
    listDealers.forEach(dealer => {
        dealer.Purchases.forEach(purchase => {
            listCashBack.push(purchase.Cashback)
        });
    });
    return listCashBack
}

function filterNewCashBack(listCashBack){
    return listCashBack.filter((cashback) => {
        return cashback.status == consts.CASHBACK_STATUS_EM_VALIDACAO
    })
}

