import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {updateProductAction} from '../actions/product.actions';
import swal from 'sweetalert'

const EditProduct = ({match,history}) => {

    const products = useSelector((state) => state.products.data)
    const {id} = match.params;
    if(!products[0]){
        products[0] = []
    }
    let result = products[0].filter(item =>  item.id == id)
    const dispatch = useDispatch(); 
    const updateProduct = (id,product) => dispatch(updateProductAction(id,product));
    const [error,setError] = useState(false);

    const handleUpdateProduct = (e,name,price) => {
        e.preventDefault();
        if(name.trim() === '' || price.trim() === ''){
            setError(true)
        }
        else{
            const product = {
                name,
                price
            }
           
            swal({
                title: "Are you sure?",
                text: "Once modified, you will not be able to recover this product!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  updateProduct(id,product)  
                  swal("Your product has been updated!", {
                    icon: "success",
                  });
                  history.push('/')
                } else {
                  swal("Your product is safe!");
                }
              });
        }
    }

    let n = '';
    let p = '';
    if(result[0]===undefined){
        result[0]=[]
    }
    else{
         n = result[0].name;
         p = result[0].price;
    }
    const [name,setName] = useState(n);
    const [price,setPrice] = useState(p);   
   
    return(
        <div className="row justify-content-center mt-5">
             {error ? <div className="font-weight-bold alert alert-danger text-center mt4">Error: Empty values</div>:
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Product</h2>
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Titulo"
                                    id="title"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price Product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio"
                                    id="price"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    pattern="[0-9]*" 
                                />
                            </div>
                            <button type="submit" onClick={e => handleUpdateProduct(e,name,price)} className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        }
        </div>  
    );
}

export default EditProduct;