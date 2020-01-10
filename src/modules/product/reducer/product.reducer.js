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
                error:false,
                data: Object.assign(state.data,state.data[0].push(action.payload))
            }
        case FAILURE_ADD_PRODUCT:
            return {
                ...state,
                error: true
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
        case DELETE_PRODUCT_SUCCESS:
            state.data[0].filter(item => item.id !== action.payload)
            return{
                data:state.data,
                error:false
            }    
        case DELETE_PRODUCT_ERROR:
            return{
                ...state,
                error:true
            }
        case UPDATE_PRODUCT_SUCCESS:
            Object.assign(state.data[0], state.data[0].map(item => item.id === action.payload.id ? item = action.payload:item ))
            return{
                data:state.data,
                error:false
            }
        case UPDATE_PRODUCT_ERROR:
            return{
                ...state,
                error:true
            }    
        default:
            return state;
    }
} 