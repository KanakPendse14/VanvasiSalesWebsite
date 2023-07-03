import Carousel from 'react-bootstrap/Carousel';

function CarouselSec() {
  return (

    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="images/c2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/c2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/img7.webp"
          alt="Third slide"
          height="432px"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSec;