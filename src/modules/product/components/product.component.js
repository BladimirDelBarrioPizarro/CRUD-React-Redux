import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadProductsAction} from '../actions/product.actions';

const Product = () => {
    
    const dispatch = useDispatch();
    const loadProducts = () => dispatch(loadProductsAction());
    useEffect( () => {
        loadProducts()
    },[]);  

  


    
    const loading = useSelector((state) => state.products.loading)
    

    return(
        <React.Fragment>
            <h2 className="text-center my-5">List Products</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>   
                </thead>
                <tbody>

                </tbody>
            </table>
            {loading ? 'Load ...':null}
</React.Fragment>
    );
}

export default Product;