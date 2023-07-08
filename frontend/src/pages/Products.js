import React, { useState } from 'react'
import Product_data from "../components/Product_data";
import SearchBar from '../components/SearchBar';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Products = () => {
const [data, setData] = useState(Product_data);
const filterResult = (categoryItem)=>{
  const result = Product_data.filter((curData)=>{
    return curData.category=== categoryItem;
  });
  setData(result);
}
return (
  <>
  <NavBar/>
  
    <div className="container-fluid mx-2">
      <div className="row mt-5 mx-2">
        <div className="col-md-4 border border-left-0">
          <div className="categories bg-white"><h2 className="text-center text-body mt-4 mb-4">CATEGORIES</h2></div>
          <button className="btn btn-dark w-100 mb-4"onClick={()=> setData(Product_data)}>ALL</button>
          <button className="btn btn-light w-100 mb-4" onClick={()=>filterResult("Paintings")}>PAINTINGS</button>
          <button className="btn btn-light w-100 mb-4" onClick={()=>filterResult("Jewellery")}>JEWELLERY</button>
          <button className="btn btn-light w-100 mb-4" onClick={()=>filterResult("Clothing")}>CLOTHING</button>
          <button className="btn btn-light w-100 mb-4" onClick={()=>filterResult("Home Decor")}>HOME DECOR</button>
          <button className="btn btn-light w-100 mb-4" onClick={()=>filterResult("Wooden Handicrafts")}>WOODEN HANDICRAFTS</button>
        </div>
        <div className="col-md-8 border border-right-0">
        <SearchBar />
          <div className="row">
            {data.map((values)=>{
              const{id, title, price, image, description} = values;
              return(
                <>
                <div className="col-md-6 mb-4" key={id}>
              <div className="card">
                <img src={image} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p> Rs {price}/-</p>
                  <p className="card-text">{description}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
                </>
              )
            })}
           
          

          </div>


        </div>
      </div>
    </div>
    <Footer/>
           


  </>


)
}

export default Products;


