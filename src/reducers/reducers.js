import {combineReducers} from 'redux';
import newProduct from '../modules/product/reducer/product.reducer';

export default combineReducers({
    products:newProduct
})