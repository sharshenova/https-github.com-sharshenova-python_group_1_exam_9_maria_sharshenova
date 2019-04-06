
import {PRODUCT_DETAILS_REQUEST_SUCCESS, PRODUCT_DETAILS_REQUEST_ERROR} from "../actions/product-details";

const initialState = {
    product: null,
    errors: {}
};


const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST_SUCCESS:
            return {...state, product: action.product};
        case PRODUCT_DETAILS_REQUEST_ERROR:
            return {...state, errors: action.errors};
        default:
            return state
    }
};


export default productDetailsReducer;

