import React from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
// import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Multicarousel from "../components/MultiCarousel";
import Footer from "../components/Footer.jsx";


// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <NavBar />
      <HeroSection/>
      <Multicarousel/> 
      <Footer/>
      {/* <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/> */}
    </div>
  );
};

export default Home;