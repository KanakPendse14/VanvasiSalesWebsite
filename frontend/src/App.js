import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// import SingleProduct from './pages/SingleProduct';
// import Cart from './pages/Cart';
// import ErrorPage from './pages/ErrorPage';

// import { ThemeProvider } from 'styled-components';
// import Header from './components/Header';

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/productdetail" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
  )
   
  
}
export default App;
