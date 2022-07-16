import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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
                            <Nav.Link href="!#"> Programs </Nav.Link>

                            <NavDropdown title="Projects" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1"> Islamic Schools </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Health Care / Medical Camps </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Higher Education </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Microfinance </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Qurbani </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Ramadhan Food Basket </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Refugees & IDPs </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Rice for Arbaeen </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Sponsor Muharram Azadari </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Yemen Appeal </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> General Fund </NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Sadaqah" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1"> Sadaqah a Day </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Sadaqah for Holy Personalities </NavDropdown.Item>

                            </NavDropdown>


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