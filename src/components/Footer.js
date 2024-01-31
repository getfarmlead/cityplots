import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footerlogo from "../images/footerlogo.png";
import Button from "react-bootstrap/Button";
import facebookic from "../images/facebookic.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import social1 from "../images/social/socialmeaiaicon-01.png";
import social2 from "../images/social/socialmeaiaicon-02.png";
import social3 from "../images/social/socialmeaiaicon-03.png";
import social4 from "../images/social/socialmeaiaicon-04.png";
import social5 from "../images/social/socialmeaiaicon-05.png";
import social6 from "../images/social/socialmeaiaicon-06.png";
import phone from "../images/phone-new-icon.png";
import Whatsapp from "../images/whatsapp-icon-new.png";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey Geek!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
    end: true,
  },
];

const locations = [
  {
    city: "Chennai",
    address: [
      "City Plots - Olympia Cyberspace Tech Park,",
      "5th Floor, Arulayiammanpet,",
      "SIDCO Industrial Estate, Guindy,",
      "Chennai - 600032.",
    ],
    phone: "+91 7092652333",
    email: "hr@cityplots.io",
  },
  {
    city: "Bengaluru",
    address: [
      "City Plots - Embassy Signet,",
      "5th Floor Kadubeesanahalli Village, Outer Ring Road,",
      "Bengaluru, Karnataka 560103.",
    ],
    phone: "+91 8071055700",
    email: "hr@cityplots.io",
  },
  {
    city: "New Delhi",
    address: [
      "City Plots - Thapar House, Gate No.1 Eastern & Central Wing Third Floor, 124, Janpath Ln,",
      "New Delhi 110001.",
    ],
    phone: "+91 11 23486800",
    email: "hr@cityplots.io",
  },
  {
    city: "Telangana",
    address: [
      "City Plots - 6th Floor, Omega-C Block, Divyasree Building, Hitech City Rd, Kondapur,",
      "Telangana 500081.",
    ],
    phone: "+91 40 71055700",
    email: "hr@cityplots.io",
  },
  {
    city: "Mumbai",
    address: [
      "City Plots - Supreme Business Park, 7th floor, Wing B, Behind Lake Castle, Building,",
      "Mumbai, Maharashtra 400076.",
    ],
    phone: "+91 40 71055700",
    email: "hr@cityplots.io",
  },
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div class="footer" data-aos="fade-up" id="footer_section">
        <div class="footer_section">
          <div class="container-fluid footer-bg">
            <Container>
              <Row>
                <Col>
                  <div className="footer-social text_left">
                    <div className="social">
                      <Button variant="primary">Get in touch with us</Button>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* <Row>
                        <Col xs={12} md={3} className="foot_address_left">
                            <p><span className="foot_address">Chennai : </span></p>
                            <div>
                                <p>City Plots - Olympia Cyberspace Tech Park,</p>
                                <p>5th Floor, Arulayiammanpet,</p>
                                <p>SIDCO Industrial Estate, Guindy,</p>
                                <p>Chennai,Tamil Nadu - 600032.</p>
                                <p>Phone: +91 7092652333</p>
                            </div>
                            <p className="main_id">Mail: hr@cityplots.io</p>
                        </Col>

                        <Col xs={12} md={3} className="foot_address_left">
                            <p><span className="foot_address">Bengaluru : </span></p>
                            <div>
                                <p>City Plots - Embassy Signet,</p>
                                <p> 5th Floor Kadubeesanahalli Village, Outer Ring Road,</p>
                                <p>Bengaluru, Karnataka 560103.</p>
                                <p>Phone: +91 8071055700</p>
                            </div>
                            <p className="main_id">Mail: hr@cityplots.io</p>
                        </Col>

                        <Col xs={12} md={3} className="foot_address_left">
                            <p><span className="foot_address">New Delhi : </span></p>
                            <div>
                                <p>City Plots - Thapar House, Gate No.1 Eastern & Central Wing Third Floor, 124, Janpath Ln,</p>
                                <p>New Delhi 110001.</p>
                                <p>Phone: +91 11 23486800</p>
                            </div>
                            <p className="main_id">Mail: hr@cityplots.io</p>
                        </Col>

                        <Col xs={12} md={3} className="foot_address_left">
                            <p><span className="foot_address">Telangana : </span></p>
                            <div>
                                <p>City Plots - 6th Floor, Omega-C Block, Divyasree Building, Hitech City Rd, Kondapur,</p>
                                <p>Telangana 500081.</p>
                                <p>Phone: +91 40 71055700</p>
                            </div>
                            <p className="main_id">Mail: hr@cityplots.io</p>
                        </Col>

                        <Col xs={12} md={3} className="foot_address_left">
                            <p><span className="foot_address">Mumbai : </span></p>
                            <div>
                                <p>City Plots - Supreme Business Park, 7th floor, Wing B, Behind Lake Castle, Building,</p>
                                <p>Mumbai, Maharashtra 400076.</p>
                                <p>Phone: +91 40 71055700</p>
                            </div>
                            <p className="main_id">Mail: hr@cityplots.io</p>
                        </Col>
                        </Row> */}

              <Row>
                {locations.map((location, index) => (
                  <Col key={index} xs={12} md={3} className="foot_address_left">
                    <p>
                      <span className="foot_address">{location.city} : </span>
                    </p>
                    <div>
                      {location.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      <p>Phone: {location.phone}</p>
                    </div>
                    <p className="main_id">Mail: {location.email}</p>
                  </Col>
                ))}
              </Row>
              <br></br>
              <br></br>
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

                <Col xs={12} md={4}>
                  <div className="footer-logo">
                    <img src={footerlogo} alt="" />
                    <p className="footer-content">
                      Cityplots is not just a typical next door property listing
                      organization. We are a pioneering tech firm that is
                      revolutionizing the way people find and purchase plots.
                    </p>
                    {/* <p><span className="foot_address">Address : </span> City Plots - Olympia Cyberspace
                                <br></br>5th Floor, Arulayiammanpet, SIDCO Industrial Estate,<br></br> Guindy, Chennai, Tamil Nadu 600032.</p>
                                <p><span className="foot_address">Email id : </span>info@cityplots.in</p>
                                <p><span className="foot_address">WhatsApp Number : </span>+91 7092652333</p> */}
                  </div>
                </Col>
                <Col sm={8}>
                  <Row>
                    <Col xs={12} md={4}>
                      <div className="footer-menu">
                        <h3>Links</h3>
                        <div className="footer-list">
                          <ul>
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="/">Services</a>
                            </li>
                            <li>
                              <a href="/about">About Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="footer-menu">
                        <h3>Legal</h3>
                        <div className="footer-list">
                          <ul>
                            <li>
                              <a href="/">Terms of use</a>
                            </li>
                            <li>
                              <a href="/">Terms of conditions</a>
                            </li>
                            <li>
                              <a href="/">Privecy policy</a>
                            </li>
                            <li>
                              <a href="/">Cookie policy</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="footer-social">
                        <div className="social2">
                          <Button variant="primary">Social Networks</Button>
                        </div>
                        <div className="social-list">
                          <ul>
                            <li>
                              <a href="https://www.instagram.com/cityplots.io">
                                <img src={social6} alt="" /> Instagram
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/cityplots.io">
                                <img src={social2} alt="" /> Facebook
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/cityplots_io">
                                <img src={social1} alt="" /> Twitter
                              </a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/@cityplots">
                                <img src={social3} alt="" /> YouTube
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/cityplots">
                                {/* <FaLinkedinIn className="icon_red"/> */}
                                <img src={social5} alt="" /> Linkedin
                              </a>
                            </li>
                            <li>
                              <a href="https://wa.me/7092652333">
                                {/* <FaLinkedinIn className="icon_red"/> */}
                                <img src={social4} alt="" /> WhatsApp
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="socialcopy">
                                                <p>Copyright ©️ CITYPLOTS PRIVATE LIMITED. All Right Reserved</p>
                                            </div> */}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <div className="socialcopy">
                    <p>
                      Copyright ©️ CITYPLOTS PRIVATE LIMITED. All Right Reserved
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <div className="footer_icon_block">
        <a href="tel:7092652333" a target="_blank">
          <img src={phone} className="phone_icon" />
        </a>
        <a href="https://wa.me/7092652333" a target="_blank">
          <img src={Whatsapp} className="phone_icon" />
        </a>
      </div>

      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="GeekBot" steps={steps} {...config} />
      </ThemeProvider>
    </>
  );
}

export default Footer;
