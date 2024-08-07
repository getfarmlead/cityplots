import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import map from "../../../images/map.png";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import product_slider4 from "../../../images/product_slider4.png";
import unlockicon1 from "../../../images/unlockicon1.png";
import unlockicon2 from "../../../images/unlockicon2.png";
import unlockicon3 from "../../../images/unlockicon3.png";
import unlockicon4 from "../../../images/unlockicon4.png";
import unlockicon5 from "../../../images/unlockicon5.png";
import unlockicon6 from "../../../images/unlockicon6.png";
import { Helmet } from "react-helmet";

function Aboutcontent() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
          <link rel="canonical" href="https://www.cityplots.io/about"/>
          <meta property="og:url" content="https://www.cityplots.io/about" />
          <title>Cityplots Mobile App Reliable Property Solution Partner</title>
          <meta property='og:title' content='Cityplots Mobile App Reliable Property Solution Partner'/>
          <meta name="description" content="Cityplots Mobile App About us - how we utilize advanced technology to provide optimal investment opportunities and comprehensive property solutions." />
          <meta property="og:description" content="Cityplots Mobile App About us - how we utilize advanced technology to provide optimal investment opportunities and comprehensive property solutions." />
          <meta name="keywords" content="CMDA Approved Residential Plots, Ultra-Luxury Villas, Premium Villa for Sale, Plot for Sale, Land for Sale, CMDA Approved plots, Approved plots near me, Residential projects, Commercial Projects, Industrial Projets, Top Builders, Book Villas, Independent Villas for sale, Cityplots, Golden Plots, Housing Plots, Villa Plots, Global Plots, Luxury Plots, Smart Plots" />
          <meta property="og:image" content="https://www.cityplots.io/og-images/about.webp"/>
      </Helmet>
      <div class="about_sectiom">
        <div class="abt">
          <div className="product_slider9" data-aos="fade-up">
            <Container>
              <Row>
                <Col>
                  <h3>Cityplots:</h3>
                  <h1>
                    Your Reliable Property{" "}
                    <span className="">Solution Partner</span>
                  </h1>
                  <p>
                    With over a decade of experience as a technology-driven
                    firm, we smoothly blend time-honored processes with
                    cutting-edge innovations, redefining the property venture
                    environment. Our adventure began by combining the 35-year
                    history of land preservation with the prowess of modern
                    technologies. Cityplots is forging a unique route in the
                    property sector by combining the wisdom of old traditions
                    with the dynamism of new technology. Our dedication to
                    progress includes bug-free operations that provide a
                    flawless experience for every client. We assist you to
                    traverse the property landscape with confidence by removing
                    hurdles and optimizing processes.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className="product_slider10" data-aos="fade-up">
            <Container>
              <Row>
                <Col>
                  <h2>
                    Our Venture <br />
                    Spans Across
                  </h2>
                  <p>
                    With over a decade of experience as a technology-driven
                    firm, we smoothly blend time-honored processes with
                    cutting-edge innovations, redefining the property venture
                    environment. Our adventure began by combining the 35-year
                    history of land preservation with the prowess of modern
                    technologies. Cityplots is forging a unique route in the
                    property sector by combining the wisdom of old traditions
                    with the dynamism of new technology. Our dedication to
                    progress includes bug-free operations that provide a
                    flawless experience for every client. We assist you to
                    traverse the property landscape with confidence by removing
                    hurdles and optimizing processes.
                  </p>
                  <div>
                    <img src={map} className="img-fluid mt-5" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}
          <br />
          <div className="side_product_slider4" data-aos="fade-up">
            <Container>
              <Row className="align-items-center">
                <Col>
                  <h2>
                    Cityplots App: Seamless Property Experiences at Your
                    Fingertips!
                  </h2>

                  <Row>
                    <Col>
                      <div className="paracontent">
                        <div className="iconpara">
                          <p>
                            With our revolutionary mobile application, you may
                            go on a voyage of property investigation and
                            investing. The Cityplots app provides you with a
                            one-of-a-kind platform that effortlessly integrates
                            tradition and technology, and is meant to improve
                            every part of your business of properties. Explore,
                            invest, and thrive in a dynamic environment that is
                            suited to your specific requirements. Your property
                            dreams, powered by the Cityplots. Download Now!
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div className="banner_resize">
                    <img src={product_slider4} className="img-fluid" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="product_slider8" data-aos="fade-up">
            <Container>
              <Row>
                <Col>
                  <h2>
                    Our Distinctive
                    <br />
                    Attributes
                  </h2>
                </Col>
              </Row>
              <div className="unlock_icon">
                <Row className="align-items-center justify-content-center">
                  <Col xs={12} md={4}>
                    <img src={unlockicon1} alt="" className="" />
                    <h3>Legal Verification:</h3>
                    <p>
                      Ensuring peace of mind, our rigorous legal verification
                      process guarantees that your property investment is secure
                      and hassle-free.
                    </p>
                  </Col>
                  <Col xs={12} md={4}>
                    <img src={unlockicon2} alt="" className="" />
                    <h3>24/7 AI Support:</h3>
                    <p>
                      With our round-the-clock AI support, your queries are
                      addressed instantly, providing you with real-time
                      assistance at your convenience.
                    </p>
                  </Col>
                  <Col xs={12} md={4}>
                    <img src={unlockicon3} alt="" className="" />
                    <h3>Financial Assistance:</h3>
                    <p>
                      Seamlessly secure loans with our doorstep assistance,
                      making financing your dream property easier and more
                      accessible than ever.
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col xs={12} md={4}>
                    <img src={unlockicon4} alt="" className="" />
                    <h3>On-time Registration:</h3>
                    <p>
                      Experience a seamless transition from ownership to
                      registration with our commitment to on-time and
                      hassle-free registration processes.
                    </p>
                  </Col>
                  <Col xs={12} md={4}>
                    <img src={unlockicon5} alt="" className="" />
                    <h3>Joint Venture:</h3>
                    <p>
                      Whether you're an individual buyer or a landlord, our
                      Joint Venture options cater to diverse investment
                      preferences, creating opportunities for growth.
                    </p>
                  </Col>
                  <Col xs={12} md={4}>
                    <img src={unlockicon6} alt="" className="" />
                    <h3>User-Friendly App:</h3>
                    <p>
                      Our intuitive app ensures a user-friendly experience,
                      empowering you to explore properties, track progress, and
                      manage investments with ease.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcontent;
