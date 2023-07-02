import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="multi-car">
      <h1 class="mc-title">TRENDING PRODUCTS</h1>
    <Carousel responsive={responsive}>
      
        <div className="card-mc">
          <img src="images/img5.jpg" alt="" className="card-image" />
          <h4 className='card-h4'>Madhubani Painting</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
        <div className="card-mc">
          <img src="images/img11.jpg" alt="" className="card-image" />
          <h4 className='card-h4'>Madhubani Painting</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
        <div className="card-mc">
          <img src="images/img12.jpg" alt="" className="card-image" />
          <h4 className='card-h4'>Madhubani Painting</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
        <div className="card-mc">
          <img src="images/img13.jpg" alt="" className="card-image" />
          <h4 className='card-h4'>Madhubani Painting</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
        <div className="card-mc">
          <img src="images/img14.webp" alt="" className="card-image" />
          <h4 className='card-h4'>Madhubani Painting</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
        <div className="card-mc">
          <img src="images/img15.jpg" alt="" className="card-image" />
          <h4 className='card-h4'>Bamboo Basket</h4>
          <p className='card-p'>$20.99</p>
          <button className='card-button'>Add To Cart</button>
        </div>
      
    </Carousel>
    </div>
  );
};

export default Multicarousel;
