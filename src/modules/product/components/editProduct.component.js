import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {updateProductAction} from '../actions/product.actions';
import swal from 'sweetalert'

const EditProduct = ({match,history}) => {

    const products = useSelector((state) => state.products.data)
    const {id} = match.params;
    //console.log(id)
    
    //products[0].filter(item => console.log(item.id))
    const result = products[0].filter(item =>  item.id == id)


    const dispatch = useDispatch(); 
    const updateProduct = (id,product) => dispatch(updateProductAction(id,product));
    
    const handleUpdateProduct = (e,name,price) => {
        e.preventDefault();
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
            } else {
              swal("Your product is safe!");
            }
          });
    }


    const n = result[0].name;
    const p = result[0].price;
    const [name,setName] = useState(n);
    const [price,setPrice] = useState(p);   
   
    return(
        
        <div className="row justify-content-center mt-5">
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
        </div>
    );
}

export default EditProduct;