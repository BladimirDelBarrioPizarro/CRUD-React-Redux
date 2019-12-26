import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './modules/header/components/header.component';
import EditProduct from './modules/product/components/editProduct.component';
import NewProduct from './modules/product/components/newProduct.component';
import Product from './modules/product/components/product.component';

function App() {
  return (
    <Router>
       <div className="container">
         <Header/>
          <Switch>
            <Route exact path="/" component={Product}></Route>
            <Route exact path="/product" component={NewProduct}></Route>
            <Route exact path="/product/:id" component={EditProduct}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
