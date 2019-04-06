
import axios, {PRODUCTS_URL} from "../../api-urls";


export const PRODUCT_DETAILS_REQUEST_SUCCESS = "PRODUCT_DETAILS_REQUEST_SUCCESS";
export const PRODUCT_DETAILS_REQUEST_ERROR = "PRODUCT_DETAILS_REQUEST_ERROR";


export const loadProductDetails = (product_id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + product_id + '/')
            .then(response => {
                console.log(response.data, 'loadProductDetails');
                return dispatch({type: PRODUCT_DETAILS_REQUEST_SUCCESS, product: response.data});
            })
            .catch(error => {
                console.log(error);
                return dispatch({type: PRODUCT_DETAILS_REQUEST_ERROR, errors: error});
            })

    }
};

