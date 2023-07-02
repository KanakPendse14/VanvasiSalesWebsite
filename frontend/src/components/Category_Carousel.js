import Carousel from 'react-bootstrap/Carousel';

function Categorycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="car-div">
        <div className="category-title">
            <h1 className='car-h1'>Home Decor</h1>
            <div className="button-car-div"><button className='button-car'>Shop Now</button></div>

          </div>

          <div className='car-img'> 
            <img
              className="d-block w-100 h-400 car-img"
              src="images/c2.jpeg"
              alt="First slide"
            />
            
          </div>


          
        </div>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="car-div">
      <div className="category-title">
            <h1 className='car-h1'>Jewellary</h1>
            <div className="button-car-div"><button className='button-car'>Shop Now</button></div>
          </div>
          <div className='car-img'> 
          <img
          className="d-block w-100 car-img"
          src="images/c2.jpg"
          alt="Second slide"
        />
          </div>

          
        </div>
        

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="car-div">
      <div className="category-title">
            <h1 className='car-h1'>Handmade Paintings</h1>
            <div className="button-car-div"><button className='button-car'>Shop Now</button></div>
          </div>
          <div className='car-img'> 
          <img
          className="d-block w-100 car-img"
          src="images/img7.webp"
          alt="Third slide"
          height="432px"
        />

          </div>

          
        </div>
        
        
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Categorycarousel;
