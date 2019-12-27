import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types/product.types';

const initialState = {
    data : [],
    error:null,
    loading:null
}

export default function form(state = initialState,action){
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                error:false
            }
        case SUCCESS_ADD_PRODUCT:
            return {
                ...state,
                error:false,
                data:[...state.data,action.payload]
            }
        case FAILURE_ADD_PRODUCT:
            return {
                ...state,
                error: true
            }
        case GET_PRODUCTS:
            return{
                loading:true, 
            }    
        case  GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                data:[action.payload],
                error:false
            }
        case  GET_PRODUCTS_ERROR:
            return{
                ...state,
                loading:false,
                data:[],
                error:true
            }                 
        default:
            return state;
    }
} 