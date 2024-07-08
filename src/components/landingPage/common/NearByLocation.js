import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kilambakam from "../../../images/kilambakam.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";

function NearByLocation() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const [transform, setTransform] = useState(false);

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
      if (isInViewport(ref.current) && !transform) {
        setTransform(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [transform]);

  return (
    <>
      <div className="side_product_slider6 product_slider2" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div ref={ref}>
                {transform && (
                  <Typist className="no-cursor">
                    <h2>
                      Nearby <span>Locations</span>
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                Kilambakkam Bus Stand is just 15 minutes away, providing easy access to public transportation.
              </p>
              <p>
                The nearby Maraimalai Nagar Railway Station is conveniently located for effortless travel.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={kilambakam} className="img-fluid" alt=""/>
              </div>
            </Col>
            <p>
            If you have any queries, call CityPlots' experienced team. We're here to help you with finding affordable plots in Maraimalai Nagar, Chennai. Benefit from our expertise and discover the perfect investment opportunity in a prime location with modern amenities. Get in touch with us right now for your more information.
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NearByLocation;

