import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './index.css'
import Logo from '../Logo/';

const Navbars = () => (
    <Navbar collapseOnSelect expand="lg" bg="transparent!important">
        <Navbar.Brand href='#'>
            <Logo srcImage={"./img/logo.png"} textTitle={"MI PAGINA"} textBody={"By React and Bootstrap"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id='responsive-navbar-na'>
            <Nav className='ml-auto'>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Proyects</Nav.Link>
                <Nav.Link href='#'>Login</Nav.Link>
                <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default Navbars