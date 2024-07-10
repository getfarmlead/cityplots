import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapImage from "../../../images/thirukatchu-map.webp";
import Typist from "react-typist";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from 'react';
import "react-multi-carousel/lib/styles.css";
import ContactForm from '../../ContactForm';

function ContactPage() {
    useEffect(() => {
        AOS.init();
      }, []);
    
      const [isVisible, setIsVisible] = useState(false);
      const [pioneer, setPioneer] = useState(false);
    
      const ref = useRef(null);
      const ref1 = useRef(null);
    
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
          if (isInViewport(ref1.current) && !pioneer) {
            setPioneer(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isVisible, pioneer]);

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
            </Col>
            <Col>
              {/* <div className="banner_resize">
                <img src={MapImage} className="img-fluid" alt="" style={{width : "85%"}}/>
              </div> */}
              <ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    );
}

export default ContactPage;
