import React from 'react';
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
// import Footer from "../components/Footer";
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Multicarousel from '../components/MultiCarousel';
import Footer from '../components/Footer.jsx';
import Artistdesc from '../components/Artistdesc';
import { useAuth } from '../context/auth';

// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import Slider from "../components/Slider";

const Home = () => {
  const {auth, setAuth} = useAuth();
  return (
    <div>
      {/* <Announcement /> */}
      <NavBar />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <HeroSection />
      <Multicarousel />
      <Artistdesc />
      <Footer />


    </div>
  );
};

export default Home;
