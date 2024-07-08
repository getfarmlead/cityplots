import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MapImage from "../../../images/thirukatchu-map.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";

function DetailsSection() {
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
      <div className="web-view">
        <div className="product_slider2" data-aos="fade-up">
          <Container>
            <Row>
              <Col className="p-0">
                <div className="city_video">
                  <div className="content">
                    <div ref={ref}>
                      {isVisible && (
                        <Typist className="no-cursor">
                          <h2>
                          The Perfect Investment for <span>Modern Living</span>
                          </h2>
                        </Typist>
                      )}
                    </div>

                    <p style={{textAlign: "center"}}>
                    Maraimalai Nagar is a quickly developing region 40 km southwest of Chennai, Tamil Nadu. This rapidly developing area is renowned for its industrial growth, educational institutions, and residential projects, attracting both businesses and residents. The region is easily accessible by road and rail, facilitating convenient travel. With many new homes, schools, clinics, and shops, it's an incredible spot to reside and work. Essential areas and contemporary conveniences drive its improvement.
                    </p>
                  </div>
                  <div className="video-container">
                    <video autoPlay muted loop className="video-background">
                      <source
                        src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/city2.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="mobile-view">
        <div className="product_slider2" data-aos="fade-up">
          <Container>
            <Row>
              <Col className="p-0">
                <div className="city_video">
                  <div className="content">
                    <div ref={ref}>
                      {isVisible && (
                        <Typist className="no-cursor">
                          <h2>
                          Cityplots in MaraimalaiNagar: The Perfect Investment for <span>Modern Living</span>
                          </h2>
                        </Typist>
                      )}
                    </div>

                    <p style={{textAlign: "center"}}>
                    Maraimalai Nagar is a quickly developing region 40 km southwest of Chennai, Tamil Nadu. This rapidly developing area is renowned for its industrial growth, educational institutions, and residential projects, attracting both businesses and residents. The region is easily accessible by road and rail, facilitating convenient travel. With many new homes, schools, clinics, and shops, it's an incredible spot to reside and work. Essential areas and contemporary conveniences drive its improvement.
                    </p>
                  </div>
                  <div className="video-container">
                    <video autoPlay muted loop className="video-background">
                      <source
                        src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/City+Mobile.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div className="side_product_slider7 product_slider2 web_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div ref={ref1}>
                {pioneer && (
                  <Typist className="no-cursor">
                    <h2>Find Your Perfect Plot in Maraimalai Nagar with <span>CityPlots</span></h2>
                  </Typist>
                )}
              </div>
              <p>
              Looking for reasonably priced plots in Maraimalai Nagar, Chennai? With its plots for sale in Maraimalai Nagar, Cityplots offers a great opportunity to invest in a premium location at a reasonable price.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={MapImage} className="img-fluid" alt="" style={{width : "85%"}}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="side_product_slider7 product_slider2 mobile_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              {/* <h2>Step into the Metaverse</h2> */}
              <div ref={ref1}>
                {pioneer && (
                  <Typist className="no-cursor">
                    <h2>Find Your Perfect Plot in Maraimalai Nagar with <span>CityPlots</span></h2>
                  </Typist>
                )}
              </div>
              <p>
              Looking for reasonably priced plots in Maraimalai Nagar, Chennai? With its plots for sale in Maraimalai Nagar, Cityplots offers a great opportunity to invest in a premium location at a reasonable price.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={MapImage} className="img-fluid" alt="" style={{width : "50%"}}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DetailsSection;

