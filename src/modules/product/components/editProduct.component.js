import React from 'react';

const EditProduct = () => {
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
                                />
                            </div>
                            <div className="form-group">
                                <label>Price Product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio" 
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                        </form>
 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;