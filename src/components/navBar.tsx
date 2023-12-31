import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/logo.svg'

import '../styles/components/navBar.sass'

function NavBar() {
  return (
        <Navbar id='navBar'  expand={'md'} className="container ">
          <Container fluid >
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
          </Navbar.Brand>
            <Navbar.Toggle id='openNav' aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="top"
              
            >
              <Offcanvas.Header closeButton className='items-center justify-content-end' />
          
              <Offcanvas.Body >
                <Nav id='navCenter' className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">Careers</Nav.Link>
                </Nav>
                <Button id='buttonNav' href='#' className='d-none d-md-block' >Request Invite</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default NavBar;
