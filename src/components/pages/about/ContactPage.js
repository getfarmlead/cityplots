import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from "react-typist";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from 'react';
import "react-multi-carousel/lib/styles.css";
import ContactForm from '../../ContactForm';
import Email from '../../../images/Icon3.webp'
import phone from '../../../images/Icon2.webp'
import location from '../../../images/Icon1.webp'

function ContactPage() {
    useEffect(() => {
        AOS.init();
      }, []);
    
      const [isVisible, setIsVisible] = useState(false);
    
      const ref = useRef(null);
    
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      
    
      useEffect(() => {
    
        const handleScroll = () => {
          if (isInViewport(ref.current) && !isVisible) {
            setIsVisible(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isVisible]);

    return (
        <>
        <div className="side_product_slider7 product_slider2" data-aos="fade-up" style={{marginTop: "90px"}}>
        <Container>
          <Row className="align-items-center">
            <Col>
            <div>
                <Typist className="no-cursor" avgTypingDelay={70}>
                    <h1 style={{textAlign: "left"}}>
                        {" "}
                        <span
                        >
                            Contact Us
                        </span>
                    </h1>{" "}
                </Typist>
            </div>
            <p>Looking for reasonably priced plots in Maraimalai Nagar, Chennai? With its plots for sale in Maraimalai Nagar, Cityplots offers a great opportunity to invest in a premium location at a reasonable price.</p>
            <ul className='contact-icon'>
              <li>
                <img src={Email} alt='mail icon' width="auto" ></img>
                <a href='mailto:hr@cityplots.io' className='contact-para'>hr@cityplots.io</a>
              </li>
              <li>
                <img src={phone} alt='phone icon' width="auto" ></img>
                <a href='tel:+917092652333' className='contact-para'>+91 7092652333</a>
              </li>
              <li>
                <img src={location} alt='location icon' width="auto" ></img>
                <span className='contact-para'>Chennai, Tamilnadu</span>
              </li>
            </ul>
            </Col>
            <Col>
              <ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    );
}

export default ContactPage;
