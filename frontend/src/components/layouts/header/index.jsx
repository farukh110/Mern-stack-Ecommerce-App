import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import './index.css';

const Header = () => {

    return (
        <div>

            <Navbar className='custom-navigation' collapseOnSelect expand="lg" bg="light" variant="light">

                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img src={logo} className="logo" alt='logo' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='custom-menu' id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link> <Link to='/'> Home </Link> </Nav.Link>

                            <Nav.Link href="!#"> Products </Nav.Link>

                            <Nav.Link href="!#"> Contact Us </Nav.Link>

                        </Nav>
                        <Nav>
                            <Link to='/login'> Login / Register </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );

}

export default Header;