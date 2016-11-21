
import * as types from '../constants/ActionTypes';

const initialState = {

    store : {
        data : []
    }
};

export default function storeReducer( state = initialState , action) {

    switch (action.type) {

        case types.ADD_PRODUCT_STORE:
            let arr = state.store.data;
            arr.push(action.result);
            return {
                ...state,
                store: {
                    data: arr
                }
            };

        case types.VALID_STORE:
            return {
                ...state,
                store: {
                    data: []
                }
            };

        default:
            return state;
    }
}