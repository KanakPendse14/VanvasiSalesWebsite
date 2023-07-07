import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <nav>
      <a href="/"><img src="images/vanvasiLogo.jpg" alt="logo"/>
    
        </a>
      <div>
        <ul id="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/product">Shop Now</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Vanvasi Kalyan Ashram</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/product">Shop Now</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            
            
          </Nav> */}
        {/* </Container>
      </Navbar> */}
      
      

     
    </>
  );
}

export default NavBar;