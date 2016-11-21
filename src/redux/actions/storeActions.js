
import * as actionType from '../constants/ActionTypes';

export function addStore( _product ) {
    return {
        type : actionType.ADD_PRODUCT_STORE,
        result: _product
    }
}

export function valideStore() {
    return {
        type : actionType.VALID_STORE,
        result: null
    }
}


