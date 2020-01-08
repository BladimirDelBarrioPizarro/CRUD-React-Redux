import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadProductsAction} from '../actions/product.actions';
import Product from './product.component';

const Products = () => {
    
    const dispatch = useDispatch();
    const loadProducts = () => dispatch(loadProductsAction());
    useEffect( () => {
        loadProducts()
    },[]);  
  
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)
    const products = useSelector((state) => state.products.data)

    return(
        <React.Fragment>
        {error ? <div className="font-weight-bold alert alert-danger text-center mt4">Error ...</div>:
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
                
                  {products.map((item,key) => (       
                    <Product
                        key={key}
                        product={item}
                    />
                    ))} 
            </table>
            
            {loading ? 'Load ...':null}
        </React.Fragment>
        }
        </React.Fragment>
    );
}

export default Products;