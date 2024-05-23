import {FC} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Logo from '../Logo/Logo';

const NavBar: FC = ( ) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Каталог</Nav.Link>
              <Nav.Link href="#link">Новости</Nav.Link>
            </Nav>
          </Navbar.Collapse>
   
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button>Войти</Button>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;