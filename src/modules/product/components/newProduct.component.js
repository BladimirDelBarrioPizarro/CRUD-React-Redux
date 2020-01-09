import React,{useState} from 'react';
import {newProductAction} from '../actions/product.actions';
import {useDispatch,useSelector} from 'react-redux';


const NewProduct = ({history}) => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');   
    const dispatch = useDispatch();
    const addProduct = (product) => dispatch(newProductAction(product)); 
    const error = useSelector((state) => state.products.error)
    
    
    const handleNewProduct = e => {
        e.preventDefault();
        const check = handleValidate(name,price);
        if(check){
            addProduct({name,price})
        }
       history.push('/')
    }


    const handleValidate = (name,price) => {
       if(name.trim() === '' || price.trim() === ''){
           return false;
       }
       else{
           return true;
       } 
    }

    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Added new product</h2>
                        <form onSubmit={handleNewProduct}>
                            <div className="form-group">
                                <label>Name product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    value={price} 
                                    onChange={e => setPrice(e.target.value)}
                                    pattern="[0-9]*"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Added</button>
                        </form>
                      {error ? <div className="font-weight-bold alert alert-danger text-center my-4">All fields are required</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;