import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    {product.map(product=>(console.log(product.name)))}
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
                <button className="btn btn-danger">Delete</button>      
           </td> 
        </tr>   
        )}
        </tbody>
      
    );
}

export default Product;