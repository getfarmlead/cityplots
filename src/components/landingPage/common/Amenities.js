import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import unlockicon1 from "../../../images/amenities/1-01.png";
import unlockicon2 from "../../../images/amenities/2-01.png";
import unlockicon3 from "../../../images/amenities/3-01.png";
import unlockicon4 from "../../../images/amenities/4-01.png";
import unlockicon5 from "../../../images/amenities/5-01.png";
import unlockicon6 from "../../../images/amenities/6-01.png";
import unlockicon7 from "../../../images/amenities/7-01.png";
import unlockicon8 from "../../../images/amenities/8-01.png";
import unlockicon9 from "../../../images/amenities/9-01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";

function Amenities() {
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
        <div className="product_slider2 product_slider8 pad-bottom-20" data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <div ref={ref}>
                            {isVisible && (
                                <Typist className="no-cursor">
                                    <h2>
                                        <span>Top Amenities</span><br></br>
                                        Invest in Cityplots for Your Home in <span>Maraimalai Nagar</span>
                                    </h2>
                                </Typist>
                            )}
                        </div>

                    </Col>
                </Row>
                <div
                    className="unlock_icon"
                    style={{
                        marginTop: "25px",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className="row">
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon1} alt="" className="" />
                            <div className="amenities-content">
                                <h3>Clear Title</h3>
                                <p>All of the plots in Maraimalai Nagar have clear titles, which makes buying them easy.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon2} alt="" className="image-rgt" />
                            <div className="amenities-content-rgt">
                                <h3>Reputable Company</h3>
                                <p>Cityplots is made by a reputable business, which guarantees quality and dependability</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon3} alt="" className="" />
                            <div className="amenities-content">
                                <h3>Black Top Road</h3>
                                <p>Well-maintained blacktop roads make driving smooth and easy.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon4} alt="" className="" />
                            <div className="amenities-content-rgt">
                                <h3>Street Lights</h3>
                                <p> Lighting up the streets makes them safer and easier to use.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon5} alt="" className="" />
                            <div className="amenities-content">
                                <h3>Secured Gated Community Plots</h3>
                                <p>Enjoy peace of mind with community plots that are protected by gates.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon6} alt="" className="" />
                            <div className="amenities-content-rgt">
                                <h3>24/7 CCTV Surveillance</h3>
                                <p>Continuous safety with CCTV cameras watching all the time.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon7} alt="" className="" />
                            <div className="amenities-content">
                                <h3>Kids Play Area</h3>
                                <p>A playground where kids can play safely and have fun.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon8} alt="" className="" />
                            <div className="amenities-content-rgt">
                                <h3>Garden</h3>
                                <p>Beautifully developed grounds where you can relax and take it easy.</p>
                            </div>
                        </div>
                        <div className="amenities-section col-xs-12 col-md-12 col-xl-12">
                            <img src={unlockicon9} alt="" className="" />
                            <div className="amenities-content">
                                <h3>Well-Developed Area</h3>
                                <p>A well-developed area with all the services you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
  );
}

export default Amenities;

