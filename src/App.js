import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/Header';
import ProductList from './Componets/ProductList';


function App() {
  return (
    <Fragment>

     <Header/>
     <ProductList/>

    </Fragment>
  );
}

export default App;
