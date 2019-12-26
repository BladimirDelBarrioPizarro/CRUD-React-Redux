import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT
} from '../types/product.types';

export function newProductAction(product) {
    return (dispatch) => {
        dispatch(newProductType())
        dispatch(newProductSuccess(product))
    }
}

export const newProductType = () => ({
    type:ADD_PRODUCT
})

export const newProductSuccess = product => ({
    type:SUCCESS_ADD_PRODUCT,
    payload:product  
})