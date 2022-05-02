import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);






    return (
        <>
            <Navbar className='navbar' expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> LOgo<img height={30} src='' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                            {
                                user ?
                                    <button onClick={() => signOut(auth)}  >Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;