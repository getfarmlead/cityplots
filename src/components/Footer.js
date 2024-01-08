import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerlogo from '../images/footerlogo.png';
import Button from 'react-bootstrap/Button';
import facebookic from '../images/facebookic.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa";


import social1 from '../images/social/socialmeaiaicon-01.png';
import social2 from '../images/social/socialmeaiaicon-02.png';
import social3 from '../images/social/socialmeaiaicon-03.png';
import social4 from '../images/social/socialmeaiaicon-04.png';
import social5 from '../images/social/socialmeaiaicon-05.png';
import social6 from '../images/social/socialmeaiaicon-06.png';


function Footer() {
    useEffect(() => 
    {
        AOS.init();
    }, [])
    return (
        <>
        <div class="footer" data-aos="fade-up">
            <div class="footer_section">
                <div class="container-fluid footer-bg">
                    <Container>
                    <Row>
                        {/* <Col className="footer-logo">
                            <p>Copyrights @ 2022</p>
                        </Col>
                        <Col className="footer-menu">
                            <ul className="footer_icon">
                                <li><Facebook color='var(--white)' size={16}/></li>
                                <li><Twitter color='var(--white)' size={16}/></li>
                                <li><Instagram color='var(--white)' size={16}/></li>
                                <li><Linkedin color='var(--white)' size={16}/></li>
                                <li><Youtube color='var(--white)' size={16}/></li>
                            </ul>
                        </Col>
                        <Col className='text-left'>
                            <p>Copyrights @ 2022</p>
                        </Col>
                        <Col className="footer-social">
                            <p>2023 Cityplots. All rights reserved</p>
                        </Col> */}

                        <Col xs={12} md={5}>
                            <div className="footer-logo">
                                <img src={footerlogo} alt="" />
                                <p>Cityplots is not just a typical next door property listing organization. We are a pioneering tech firm that is revolutionizing the way people find and purchase plots.</p>
                                {/* <p><span className="foot_address">Address : </span> City Plots - Olympia Cyberspace
                                <br></br>5th Floor, Arulayiammanpet, SIDCO Industrial Estate,<br></br> Guindy, Chennai, Tamil Nadu 600032.</p>
                                <p><span className="foot_address">Email id : </span>info@cityplots.in</p>
                                <p><span className="foot_address">WhatsApp Number : </span>+91 7092652333</p> */}
                            </div>
                        </Col>
                        <Col sm={7}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <div className="footer-menu">
                                        <h3>Links</h3>
                                        <div className="footer-list">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/">Services</a></li>
                                                <li><a href="/about">About Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="footer-menu">
                                        <h3>Legal</h3>
                                        <div className="footer-list">
                                            <ul>
                                                <li><a href="/">Terms of use</a></li>
                                                <li><a href="/">Terms of conditions</a></li>
                                                <li><a href="/">Privecy policy</a></li>
                                                <li><a href="/">Cookie policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="footer-social">
                                            <div className="social">
                                                <Button variant="primary">Get in touch with us</Button>
                                            </div>
                                            <div className="social-list">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.instagram.com/cityplotschennai/">
                                                            <img src={social6} alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.facebook.com/cityplotschennai/">
                                                            <img src={social2} alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/cityplotsch">
                                                            <img src={social1} alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.youtube.com/@cityplotschennai">
                                                            <img src={social3} alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/company/cityplotschennai/">
                                                            {/* <FaLinkedinIn className="icon_red"/> */}
                                                            <img src={social5} alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://wa.me/7092652333">
                                                        {/* <FaLinkedinIn className="icon_red"/> */}
                                                            <img src={social4} alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="socialcopy">
                                                <p>Copyright ©️ CITYPLOTS PRIVATE LIMITED. All Right Reserved</p>
                                            </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <br></br>

                        <Row>
                            <Col xs={12} md={3} className="foot_address_left">
                                <p><span className="foot_address">Chennai : </span></p>
                                <p>City Plots - Olympia Cyberspace, 5th Floor, Arulayiammanpet,
                                SIDCO Industrial Estate, Guindy, Chennai,
                                Tamil Nadu 600032.
                                    <br></br>Phone : +91 7092652333</p><p>Mail : info@cityplots.in</p>
                            </Col>
                            <Col xs={12} md={3} className="foot_address_left">
                                <p><span className="foot_address">Bengaluru : </span></p>
                                <p>Embassy Signet, 5th Floor Kadubeesanahalli <br></br>
                                Village, Outer Ring Rd, Bengaluru, <br></br>Karnataka 560103.<br></br>Phone : +91 8071055700</p>
                            </Col>
                            <Col xs={12} md={3} className="foot_address_left">
                                <p><span className="foot_address">New Delhi : </span></p>
                                <p>Thapar House, Gate no.1 Eastern & Central Wing Third Floor, 124, Janpath Ln, <br></br>New Delhi 110001.
                                    <br></br>Phone : +91 11 23486800</p>
                            </Col>
                            <Col xs={12} md={3} className="foot_address_left">
                                <p><span className="foot_address">Telangana : </span></p>
                                <p>6th Floor, Omega-C Block, Divyasree Building, Hitech City Rd, Kondapur, <br></br>Telangana 500081.<br></br>Phone : +91 40 71055700</p>
                            </Col>
                        </Row>

                </Container>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       