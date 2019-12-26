import React from 'react';

const NewProduct = () => {
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Added new product</h2>
                        <form>
                            <div className="form-group">
                                <label>Name product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Price product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro" 
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Added</button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;