import httpClient from '../../axios/axios';

import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR
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


export const loadingProductsSuccess = (products) => ({
    type:GET_PRODUCTS_SUCCESS,
    payload:products
})

export const loadingProductsError = () => ({
    type:GET_PRODUCTS_ERROR
})


export function loadProductsAction(){
    return (dispatch) => {
          httpClient.get('/products')
            .then(res =>
                dispatch(loadingProductsSuccess(res.data))
            )
            .catch(error => {
                dispatch(loadingProductsError())
            })    
    }
}


export const deleteProductsSuccess = () => ({
       type: DELETE_PRODUCT_SUCCESS
})

export const deleteProductsError = error => ({
    type: DELETE_PRODUCT_ERROR,
    payload:error
})


export function deleteProductAction(id){
    return (dispatch) => {
            httpClient.delete(`/products/${id}`)
            .then(res => {
                 dispatch(deleteProductsSuccess())
                 dispatch(loadProductsAction())
              })
             .catch(error =>
                 dispatch(deleteProductsError(error))
                 ) 
    }
}

export const updateProductSuccess = (product) =>({
    type: UPDATE_PRODUCT_SUCCESS,
    payload:product 
})

export const updateProductError = () => ({
    type: UPDATE_PRODUCT_ERROR
})

export function updateProductAction(id,product){
    return (dispatch) => {
       httpClient.get(`products/${id}`)
        .then(res => 
         dispatch(updateProduct(res.data.id,product))
        )
        .catch(error => {
            dispatch(updateProductError()) 
        })   
    }  
}

 export function updateProduct(id,product){
    const value = {
        name : product.name,
        price: product.price,
        id:id
    } 
    return (dispatch) => { 
      httpClient.put(`products/${id}`,product)
        .then(res =>
            dispatch(updateProductSuccess(value))
        )
        .catch(error => {
           dispatch(updateProductError())
        })
    }
}








