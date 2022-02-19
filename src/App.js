import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="products" element={<Products/>}>
          <Route exact path=":id" element={<ProductDetails/>}/>
          <Route path="default" element="Product does not exist!!!"/>
        </Route>
        <Route path="*" element="PAGES DOESNOT EXIST!!!"/>

      </Routes>

    </div>
  );
}

export default App;
