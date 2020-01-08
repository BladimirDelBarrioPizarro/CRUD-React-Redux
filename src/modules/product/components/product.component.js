import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteProductAction} from '../actions/product.actions';
import swal from 'sweetalert'


const Product = ({product}) => {
    //{product.map(product=>(console.log(product.name)))}

    const dispatch = useDispatch();
    const deleteProduct = (id) => dispatch(deleteProductAction(id));
    const handleDelete = (e,id) => {
      e.preventDefault()
      confirmation(id)
      //deleteProduct(id)
    }
    
    const confirmation = (id) => {
      console.log(id)
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteProduct(id)
          swal("Your product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }

    return(
       <tbody>
        {product.map(product=>
       <tr>          
          <td>{product.name}</td>
          <td><span className="font-weight-bold">$ {product.price}</span></td>     
          <td className="actions">
                <Link to={`product/${product.id}`}
                      className="btn btn-primary mr-2"
                      >Editar</Link>
             <form onSubmit={e => handleDelete(e,product.id)}><button className="btn btn-danger" type="submit">Delete {product.id}</button></form>          
           </td> 
        </tr>   
        )}
        </tbody>
    );
}

export default Product;