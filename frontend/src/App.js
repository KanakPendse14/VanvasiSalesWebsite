import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Pagenotfound from './pages/PageNotFound';
import Login from './pages/Login';
import Register from './pages/Register';

import 'react-toastify/dist/ReactToastify.css';
const App=()=>{
  return (

    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/productdetail" element={<ProductDetail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
  )
   
  
}
export default App;
