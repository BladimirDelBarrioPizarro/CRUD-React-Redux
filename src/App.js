import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Header from './modules/header/components/header.component';
import EditProduct from './modules/product/components/editProduct.component';
import NewProduct from './modules/product/components/newProduct.component';
import Products from './modules/product/components/products.component';

function App() {
  return (
    <Router>
       <div className="container">
         <Header/>
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route exact path="/product" component={NewProduct}></Route>
            <Route exact path="/product/:id" component={EditProduct}></Route>
          </Switch>
      </div>
      {window.onload=<Redirect to='/'/>}
    </Router>
  );
}

export default App;
