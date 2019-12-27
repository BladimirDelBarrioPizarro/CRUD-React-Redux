import httpClient from '../../axios/axios';

import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types/product.types';


export const newProductType = () => ({
    type:ADD_PRODUCT
})

export const newProductSuccess = product => ({
    type:SUCCESS_ADD_PRODUCT,
    payload:product  
})

export const newProductError = () => ({
    type:FAILURE_ADD_PRODUCT
})

export function newProductAction(product) {
    return (dispatch) => {
        dispatch(newProductType())
        httpClient.post('/products',product)
         .then(res => 
            dispatch(newProductSuccess(product))
            )
         .catch(error => {
             dispatch(newProductError())
         })
       
    }
}


export const loadingProducts = () => ({
    type: GET_PRODUCTS
})
export const loadingProductsSuccess = (products) => ({
    type:GET_PRODUCTS_SUCCESS,
    payload:products
})

export const loadingProductsError = () => ({
    type:GET_PRODUCTS_ERROR
})


export function loadProductsAction(){
    return (dispatch) => {
        dispatch(loadingProducts()) 
          httpClient.get('/products')
            .then(res =>
                dispatch(loadingProductsSuccess(res.data))
            )
            .catch(error => {
                dispatch(loadingProductsError())
            })    
    }
}