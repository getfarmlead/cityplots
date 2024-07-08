import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";
import ContactForm from "../../ContactForm";

function LandingPageForm() {

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
    <div className=" product_slider2" data-aos="fade-up" style={{paddingTop: "100px"}}>
        <Container>
          <Row>
            <Col>
              <div ref={ref}>
                {isVisible && (
                  <Typist className="no-cursor">
                    <h2>
                    <span>Enquiry Form</span>
                    </h2>
                  </Typist>
                )}
              </div>
            </Col>
          </Row>
          <ContactForm/>
        </Container>
      </div>
  )
}

export default LandingPageForm
