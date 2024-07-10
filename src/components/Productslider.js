import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import Ellipse from "../images/Ellipse 3.png";
import unlockicon1 from "../images/unlockicon1.png";
import unlockicon2 from "../images/unlockicon2.png";
import unlockicon3 from "../images/unlockicon3.png";
import unlockicon4 from "../images/unlockicon4.png";
import unlockicon5 from "../images/unlockicon5.png";
import unlockicon6 from "../images/unlockicon6.png";
import product_slider3 from "../images/product_slider3.png";
import product_slider4 from "../images/product_slider4.png";
// import product_slider5 from "../images/product_slider5.png";
import product_slider6 from "../images/product_slider6.png";
import product_slider7 from "../images/product_slider7.png";
import product_slider5 from "../images/Phone 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typist from "react-typist";

function Productslider() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [pioneer, setPioneer] = useState(false);
  const [blockchain, setBlockchain] = useState(false);
  const [ai, setAI] = useState(false);
  const [personalize, setPersonalize] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [cmda, setCMDA] = useState(false);
  const [step, setStep] = useState(false);
  const [transform, setTransform] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

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
  const handleScroll = () => {
    if (isInViewport(ref.current) && !isVisible) {
      setIsVisible(true);
    }
    if (isInViewport(ref1.current) && !pioneer) {
      setPioneer(true);
    }
    if (isInViewport(ref2.current) && !blockchain) {
      setBlockchain(true);
    }
    if (isInViewport(ref3.current) && !ai) {
      setAI(true);
    }
    if (isInViewport(ref4.current) && !personalize) {
      setPersonalize(true);
    }
    if (isInViewport(ref5.current) && !unlock) {
      setUnlock(true);
    }
    if (isInViewport(ref6.current) && !cmda) {
      setCMDA(true);
    }
    if (isInViewport(ref7.current) && !step) {
      setStep(true);
    }
    if (isInViewport(ref8.current) && !transform) {
      setTransform(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                            Discover Your Dream Plot with
                            <span> Cityplots</span>
                          </h2>
                        </Typist>
                      )}
                    </div>

                    <p>
                      Cityplots is not your typical organization next door. We
                      are a pioneering tech company that is revolutionizing the
                      way people find and purchase plots. Combining our passion
                      to simplify property hunting with cutting-edge technology,
                      we have developed a powerful suite of tools. Our services
                      enhance your plot-hunting experience.
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
                            Discover Your Dream Plot with
                            <span> Cityplots</span>
                          </h2>
                        </Typist>
                      )}
                    </div>

                    <p>
                      Cityplots is not your typical organization next door. We
                      are a pioneering tech company that is revolutionizing the
                      way people find and purchase plots. Combining our passion
                      to simplify property hunting with cutting-edge technology,
                      we have developed a powerful suite of tools. Our services
                      enhance your plot-hunting experience.
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

      <div className="web-view">
        <div className="side_product_slider" data-aos="fade-up">
          <Container className="absolute_video">
            <Row className="align-items-center">
              <Col md={6}>
                {/* <h2>Pioneering Technology Delivered to Your Fingertips</h2> */}
                <div ref={ref1}>
                  {pioneer && (
                    <Typist className="no-cursor">
                      <h2>
                        Pioneering Technology Delivered to Your Fingertips
                      </h2>
                    </Typist>
                  )}
                </div>
                <Row>
                  <Col>
                    <div className="paracontent" style={{ marginTop: "30px" }}>
                      <div className="icon">
                        <img src={Ellipse} className="img-fluid" />
                      </div>
                      <div className="iconpara">
                        <p>
                          We leverage the latest advancements in technology to
                          provide you with an unrivaled experience.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="paracontent">
                      <div className="icon">
                        <img src={Ellipse} className="img-fluid" />
                      </div>
                      <div className="iconpara">
                        <p>
                          Our innovative approach sets us apart from traditional
                          companies.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="banner_resize">
                  <div className="fingerprint">
                    <video muted loop autoPlay className="img-fluid">
                      <source
                        src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/fingerprintvdo.mp4"
                        type="video/mp4"
                        className="img-fluid"
                      />
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="mobile-view">
        <div className="side_product_slider" data-aos="fade-up">
          <Container className="absolute_video">
            <Row className="align-items-center">
              <Col md={6}>
                {/* <h2>Pioneering Technology Delivered to Your Fingertips</h2> */}
                <div ref={ref1}>
                  {pioneer && (
                    <Typist className="no-cursor">
                      <h2>
                        Pioneering Technology Delivered to Your Fingertips
                      </h2>
                    </Typist>
                  )}
                </div>
                <Row>
                  <Col>
                    <div className="paracontent" style={{ marginTop: "30px" }}>
                      <div className="icon">
                        <img src={Ellipse} className="img-fluid" />
                      </div>
                      <div className="iconpara">
                        <p>
                          We leverage the latest advancements in technology to
                          provide you with an unrivaled experience.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div className="paracontent">
                      <div className="icon">
                        <img src={Ellipse} className="img-fluid" />
                      </div>
                      <div className="iconpara">
                        <p>
                          Our innovative approach sets us apart from traditional
                          companies.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="banner_resize">
                  <div className="mobile-fingerprint">
                    <video muted loop autoPlay className="img-fluid">
                      <source
                        src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/FIngerprint+Mobiles.mp4"
                        type="video/mp4"
                        className="img-fluid"
                      />
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="web-view">
        <div className="side_product_slider" data-aos="fade-up">
          <Container className="absolute_video">
            <Row className="align-items-right">
              <Col md={6}>
                {/* <h2>Pioneering Technology Delivered to Your Fingertips</h2> */}
                <div ref={ref2}>
                  {blockchain && (
                    <Typist className="no-cursor">
                      <h2>
                        {" "}
                        Blockchain:{" "}
                        <span style={{ whiteSpace: "nowrap" }}>
                          Securing Your
                        </span>
                        <br />
                        <span style={{ whiteSpace: "nowrap" }}>
                          Investment with{" "}
                        </span>{" "}
                        Transparency
                      </h2>
                    </Typist>
                  )}
                </div>
                <Row>
                  <Col>
                    <div className="paracontent" style={{ marginTop: "30px" }}>
                      <div className="iconpara">
                        <p>
                          With blockchain, you can trust that your information
                          and legal documentation are immutable and
                          tamper-proof, ensuring a safe and transparent
                          transaction.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row></Row>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="banner_resize">
                  <div className="fingerprint">
                    <video muted loop autoPlay className="img-fluid">
                      <source
                        src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/Blockchain+animation+Final.mp4"
                        type="video/mp4"
                        className="img-fluid"
                      />
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="mobile-view">
        <div className="side_product_slider" data-aos="fade-up">
          <Container className="absolute_video">
            <Row className="align-items-right">
              <Col md={6}>
                {/* <h2>Pioneering Technology Delivered to Your Fingertips</h2> */}
                <div ref={ref2}>
                  {blockchain && (
                    <Typist className="no-cursor">
                      <h2>
                        {" "}
                        Blockchain:{" "}
                        <span style={{ whiteSpace: "nowrap" }}>
                          Securing Your
                        </span>
                        <br />
                        <span style={{ whiteSpace: "nowrap" }}>
                          Investment with{" "}
                        </span>{" "}
                        Transparency
                      </h2>
                    </Typist>
                  )}
                </div>
                <Row>
                  <Col>
                    <div className="paracontent" style={{ marginTop: "30px" }}>
                      <div className="iconpara">
                        <p>
                          With blockchain, you can trust that your information
                          and legal documentation are immutable and
                          tamper-proof, ensuring a safe and transparent
                          transaction.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row></Row>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="banner_resize">
                  <div className="mobile-fingerprint">
                    <video muted loop autoPlay className="img-fluid">
                      <source
                        src="	https://cityplotsimages.s3.ap-south-1.amazonaws.com/Block+chain+Mobiles.mp4"
                        type="video/mp4"
                        className="img-fluid"
                      />
                    </video>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="side_product_slider" data-aos="fade-up">
        <Container className="absolute_video">
          <Row className="align-items-center">
            <Col md={6}>
              {/* <h2>Pioneering Technology Delivered to Your Fingertips</h2> */}
              <div ref={ref3}>
                {ai && (
                  <Typist className="no-cursor">
                    <h2>
                      AI <br />
                      EMPOWERMENT
                    </h2>
                  </Typist>
                )}
              </div>
              <Row>
                <Col>
                  <div className="paracontent" style={{ marginTop: "10px" }}>
                    <div className="icon">
                      <img src={Ellipse} className="img-fluid" />
                    </div>
                    <div className="iconpara">
                      <p>
                        Our app harnesses the power of AI to revolutionize your
                        plot-hunting experience.Upload any legal document, and
                        our AI performs a vernacular check while providing a
                        concise summary for easy understanding
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="paracontent">
                    <div className="icon">
                      <img src={Ellipse} className="img-fluid" />
                    </div>
                    <div className="iconpara">
                      <p>
                        Experience our AI Investment Banker, which analyzes your
                        income, expenses, and savings to recommend properties
                        with higher ROI potential
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col className="p-0">
              <div className="banner_resize">
                <div className="fingerprint">
                  <video muted loop autoPlay className="img-fluid">
                    <source
                      src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/AI+Animation+Final.mp4"
                      type="video/mp4"
                      className="img-fluid"
                    />
                  </video>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />

      <div className="side_product_slider5 web_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="banner_resize">
                <img src={product_slider5} className="img-fluid" />
              </div>
            </Col>
            <Col>
              {/* <h2>PERSONALIZED MOBILE APP: YOUR GATEWAY TO A WORLD OF PLOTS</h2> */}
              <div ref={ref4}>
                {personalize && (
                  <Typist className="no-cursor">
                    <h2>
                      PERSONALIZED MOBILE APP: YOUR GATEWAY TO A WORLD OF PLOTS
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                Our state-of-the-art mobile app is the heart of
                Cityplots' technological prowess.With its intuitive interface,you
                can search for plots based on your preferences,explore detailed
                information about each plot ,and even connect with our experts
                for personalized guidance. Embrace the power of technology at
                your fingertips
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="side_product_slider5 mobile_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              {/* <h2>PERSONALIZED MOBILE APP: YOUR GATEWAY TO A WORLD OF PLOTS</h2> */}
              <div ref={ref4}>
                {personalize && (
                  <Typist className="no-cursor">
                    <h2>
                      PERSONALIZED MOBILE APP: YOUR GATEWAY TO A WORLD OF PLOTS
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                Our state-of-the-art mobile app is the heart of
                Cityplots' technological prowess.With its intuitive interface,you
                can search for plots based on your preferences,explore detailed
                information about each plot ,and even connect with our experts
                for personalized guidance. Embrace the power of technology at
                your fingertips
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                {/* <img src={product_slider5} className="img-fluid" /> */}
                <div className="mobile-fingerprint">
                  <video muted loop autoPlay className="img-fluid">
                    <source
                      src="https://cityplotsimages.s3.ap-south-1.amazonaws.com/Phone1+Mobile.mp4"
                      type="video/mp4"
                      className="img-fluid"
                    />
                  </video>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="product_slider8" data-aos="fade-up">
        <Container>
          <Row>
            <Col>
              {/* <h2>
                Unlocking Opportunities for Joint Ventures and Independent
                Channel Partners
              </h2> */}
              <div ref={ref5}>
                {unlock && (
                  <Typist className="no-cursor">
                    <h2>
                      Unlocking Opportunities for Joint Ventures and Independent
                      Channel Partners
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                At Cityplots, we understand the vital role that Joint Ventures
                and Independent Channel Partners play. That's why our innovative
                mobile app is designed to empower you and help you secure the
                best deals for your clients.
              </p>
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
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon1} alt="" className="" />
                <h3>Collaboration Made Easy</h3>
              </div>
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon2} alt="" className="" />
                <h3>Consistent Financial Growth</h3>
              </div>
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon3} alt="" className="" />
                <h3>Streamlined Deal Management</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon4} alt="" className="" />
                <h3>Networking and Upskilling Opportunities</h3>
              </div>
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon5} alt="" className="" />
                <h3>Enhanced Visibility</h3>
              </div>
              <div className="col-xs-12 col-md-4">
                <img src={unlockicon6} alt="" className="" />
                <h3>Real-Time Notifications and Alerts</h3>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="side_product_slider6" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              {/* <h2>
                CMDA-Approved Plots, Agricultural Lands, Villa Plots, & More
                commercial and industrial
              </h2> */}
              <div ref={ref6}>
                {cmda && (
                  <Typist className="no-cursor">
                    <h2>
                      PREMIUM PLOTS, AGRICULTURAL LANDS, VILLA PLOTS, & MORE
                      COMMERCIAL AND INDUSTRIAL PLOTS
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                Browse through a diverse range of plot options tailored to your
                specific needs. Whether you're looking for premium plots,
                fertile agricultural lands, or luxurious villa plots, we have
                the perfect selection waiting for you.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={product_slider6} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="side_product_slider7 web_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="banner_resize">
                <img src={product_slider7} className="img-fluid" />
              </div>
            </Col>
            <Col>
              {/* <h2>Step into the Metaverse</h2> */}
              <div ref={ref7}>
                {step && (
                  <Typist className="no-cursor">
                    <h2>Step into the Metaverse</h2>
                  </Typist>
                )}
              </div>
              <p>
                Explore properties like never before with Cityplots' Metaverse
                experience. Utilize App Vision Pro for virtual property tours
                that immerse you in lifelike environments, all from the comfort
                of your home. Say goodbye to physical constraints and Embrace
                the future of plot exploration.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="side_product_slider7 mobile_view" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              {/* <h2>Step into the Metaverse</h2> */}
              <div ref={ref7}>
                {step && (
                  <Typist className="no-cursor">
                    <h2>Step into the Metaverse</h2>
                  </Typist>
                )}
              </div>
              <p>
                Explore properties like never before with Cityplots' Metaverse
                experience. Utilize App Vision Pro for virtual property tours
                that immerse you in lifelike environments, all from the comfort
                of your home. Say goodbye to physical constraints and embrace
                the future of plot exploration.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={product_slider7} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <div className="side_product_slider6" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div ref={ref8}>
                {transform && (
                  <Typist className="no-cursor">
                    <h2>
                      Transforming Property Exploration Using AI Technology
                    </h2>
                  </Typist>
                )}
              </div>
              <p>
                CityPlots stands out as a trailblazing AI-driven investment
                portal in the property sector, offering a revolutionary platform
                for those in pursuit of the perfect plot, land, or villa. With a
                commitment to redefining property ventures, CityPlots seamlessly
                merges decades of land preservation heritage with contemporary
                technology, ensuring a unique and flawless experience for every
                client. Prospective buyers can explore a diverse range of
                options, including CMDA-approved plots, premium villa plots, and
                DTCP-approved plots, tailored to their specific needs. This
                platform not only simplifies the property hunting experience but
                also ensures transparency and security in transactions, making
                it a go-to destination for those seeking perfect properties and
                plots for sale.
              </p>
            </Col>
            <Col>
              <div className="banner_resize">
                <img src={product_slider6} className="img-fluid" />
              </div>
            </Col>
            <p>
              Whether you're in search of approved plots near you or looking to
              buy land, plots, or villas online, CityPlots offers a
              user-friendly mobile app that serves as a gateway to a world of
              possibilities. The intuitive interface empowers users to browse
              through various types of properties such as CMDA-approved housing
              plots, premium villa plots, apartments, and individual houses
              effortlessly. CityPlots app leverages the power of AI to provide
              real-time news, and updates, analyze financial aspects, and
              recommend properties with higher ROI potential. Additionally, the
              incorporation of blockchain technology ensures the immutability
              and tamper-proof nature of legal documentation, instilling trust
              and transparency in every transaction.
            </p>

            <p>
              CityPlots caters to a wide geographic spectrum, with exceptional
              ongoing projects in Chennai, Hyderabad, Bengaluru, and Mumbai. The
              platform's commitment to delivering on-time registration, rigorous
              legal verification, 24/7 AI support, and financial assistance adds
              a layer of assurance and convenience for those navigating the
              dynamic landscape of property investment. Whether you're an
              individual buyer or interested in joint ventures, CityPlots
              provides diverse investment opportunities, creating a seamless and
              empowering experience for all those seeking CMDA-approved villas,
              land, and plots for sale.
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Productslider;
