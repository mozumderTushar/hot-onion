import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo/logo2.png';
import './Header.css'

const Header = () => {
    return (
       <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
            <Navbar.Brand href="#">
                <img src={logo} alt="" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link className="signup" href="/signup">Signup</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
       </div>
    );
};

export default Header;