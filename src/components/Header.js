import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../images/logo.png';
import new_logo from '../images/new_logo.png';
import home from '../images/home.svg';
import setting from '../images/setting.svg';
import about from '../images/about.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import social from '../images/social.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IoNewspaperOutline } from "react-icons/io5";



function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => 
    {
        AOS.init();
    }, [])
    return (
        <>
        <div className="header_nav" data-aos="fade-down">
            <div className="cotainer">
                <div className='row'>
                    <div className='col-sm-12'>
                    <Navbar expand="lg" className="is-sticky">  
                        <Container>
                            <Navbar.Brand href="/"><img src={new_logo} className="header_logo"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav activeKey="/" className="me-auto-right navbar-nav">
                                <nav><Link activeClassName="selected" className="nav-link" to="/"><img src={home} className="logo-setting"/>Home</Link></nav>
                                <nav><Link className="nav-link" to="/about"><img src={about} className="logo-setting"/>About</Link></nav>
                                <nav><Link className="nav-link" to="/"><img src={setting} className="logo-setting"/>Services</Link></nav>
                                <nav><Link className="nav-link" to="/"><IoNewspaperOutline className="logo-setting2"/>News Update</Link></nav>                                
                            </Nav>
                                <nav>
                                    <Link className="nav-link" to="#"><div className="social_btn">Social Networks<span><img src={social} /></span></div></Link>
                                </nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Header;

