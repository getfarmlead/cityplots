import React,{useEffect} from "react";
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import Ellipse from '../images/Ellipse 3.png';
import unlockicon1 from '../images/unlockicon1.png';
import unlockicon2 from '../images/unlockicon2.png';
import unlockicon3 from '../images/unlockicon3.png';
import unlockicon4 from '../images/unlockicon4.png';
import unlockicon5 from '../images/unlockicon5.png';
import unlockicon6 from '../images/unlockicon6.png';
import product_slider3 from '../images/product_slider3.png';
import product_slider4 from '../images/product_slider4.png';
import product_slider5 from '../images/product_slider5.png';
import product_slider6 from '../images/product_slider6.png';
import product_slider7 from '../images/product_slider7.png';

import cityVideo from '../images/cityVideo.mp4';
import fingerprint from '../images/fingerprint.mp4';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Productslider() {
    useEffect(() => 
    {
        AOS.init();
    }, [])
    return (
        <>
        <div className="product_slider2" data-aos="fade-up">

            <Container>
                <Row>
                    <Col>
                    <h2>Discover Your Dream Plot with <span className="">Cityplots</span></h2>
                    <p>Cityplots is not your typical organization next door. We are a pioneering tech company that is revolutionizing the way people find and purchase plots. Combining our passion to simplify property hunting with cutting-edge technology, we have developed a powerful suite of tools. Our services enhance your plot-hunting experience.</p>
                    
                    {/* <video class="bg_vid" autoplay="" loop="" controls muted="" playsinline="">
                        <source src="https://cityplots.000webhostapp.com/sale/cityVideo.mp4" type="video/mp4" className="img-fluid"/>
                    </video> */}

                    <video muted loop autoPlay className="img-fluid">
                            <source src="https://cityplots.000webhostapp.com/sale/cityVideo.mp4" type="video/mp4" className="img-fluid"/>
                    </video>

                    

                    </Col>
                </Row>
            </Container>
        </div>

        <div className="side_product_slider" data-aos="fade-up">
            <Container>
                <Row>
                </Row>
                <Row className="align-items-center">
                    <Col>
                    <h2>Pioneering Technology Delivered to Your Fingertips</h2>
                    
                    <Row>
                      <Col>
                      <div className="paracontent">
                        <div className="icon"><img src={Ellipse} className="img-fluid" /></div>
                        <div className="iconpara"><p>We leverage the latest advancements in technology to provide you with an unrivaled experience.</p></div>
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="paracontent">
                        <div className="icon"><img src={Ellipse} className="img-fluid" /></div>
                        <div className="iconpara"><p>Our innovative approach sets us apart from traditional companies.</p></div>
                      </div>
                      </Col>
                    </Row>

                    </Col>
                    <Col>
                    <div className="banner_resize">
                     
                        <video muted loop autoPlay className="img-fluid">
                            <source src="https://cityplots.000webhostapp.com/sale/fingerprint.mp4" type="video/mp4" className="img-fluid"/>
                        </video>

                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="side_product_slider3 web_view" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col className="order1 ">
                    <div className="banner_resize">
                        <img src={product_slider3} className="img-fluid" />
                    </div>
                    </Col>
                    <Col className="order2">
                    <h2>Blockchain: Securing Your Investment with Transparency</h2>
                    <p>With blockchain, you can trust that your information and legal documentation are immutable and tamper-proof, ensuring a safe and transparent transaction.</p>
                    </Col>
                </Row>

            </Container>
        </div>

        <div className="side_product_slider3  mobile_view" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col className="order2">
                    <h2>Blockchain: Securing Your Investment with Transparency</h2>
                    <p>With blockchain, you can trust that your information and legal documentation are immutable and tamper-proof, ensuring a safe and transparent transaction.</p>
                    </Col>
                    <Col className="order1 ">
                    <div className="banner_resize">
                        <img src={product_slider3} className="img-fluid" />
                    </div>
                    </Col>
                    
                </Row>

            </Container>
        </div>


        <div className="side_product_slider4" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <h2>Pioneering Technology Delivered to Your Fingertips</h2>
                    
                    <Row>
                      <Col>
                      <div className="paracontent">
                        <div className="icon"><img src={Ellipse} className="img-fluid" /></div>
                        <div className="iconpara"><p>We leverage the latest advancements in technology to provide you with an unrivaled experience.</p></div>
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="paracontent">
                        <div className="icon"><img src={Ellipse} className="img-fluid" /></div>
                        <div className="iconpara"><p>Our innovative approach sets us apart from traditional companies.</p></div>
                      </div>
                      </Col>
                    </Row>

                    </Col>
                    <Col>
                    <div className="banner_resize">
                        <img src={product_slider4} className="img-fluid" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="side_product_slider5 web_view" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <div className="banner_resize">
                        <img src={product_slider5} className="img-fluid" />
                    </div>
                    </Col>
                    <Col>
                    <h2>Blockchain: Securing Your Investment with Transparency</h2>
                    <p>With blockchain, you can trust that your information and legal documentation are immutable and tamper-proof, ensuring a safe and transparent transaction.</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="side_product_slider5 mobile_view" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    
                    <Col>
                    <h2>Blockchain: Securing Your Investment with Transparency</h2>
                    <p>With blockchain, you can trust that your information and legal documentation are immutable and tamper-proof, ensuring a safe and transparent transaction.</p>
                    </Col>
                    <Col>
                    <div className="banner_resize">
                        <img src={product_slider5} className="img-fluid" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="product_slider8" data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                    <h2>Unlocking Opportunities for Joint Ventures and Independent Channel Partners</h2>
                    <p>At Cityplots, we understand the vital role that Joint Ventures and Independent Channel Partners play. That's why our innovative mobile app is designed to empower you and help you secure the best deals for your clients.</p>
                    </Col>
                </Row>
                <div className="unlock_icon">
                  <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={4}>
                    <img src={unlockicon1} alt="" classNmae="" />
                    <h3>Collaboration Made Easy</h3>
                    </Col>
                    <Col xs={12} md={4}>
                    <img src={unlockicon2} alt="" classNmae="" />
                    <h3>Consistent Financial Growth</h3>
                    </Col>
                    <Col xs={12} md={4}>
                    <img src={unlockicon3} alt="" classNmae="" />
                    <h3>Streamlined Deal Management</h3>
                    </Col>
                  </Row>
                  <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={4}>
                    <img src={unlockicon4} alt="" classNmae="" />
                    <h3>Networking and Upskilling Opportunities</h3>
                    </Col>
                    <Col xs={12} md={4}>
                    <img src={unlockicon5} alt="" classNmae="" />
                    <h3>Enhanced Visibility</h3>
                    </Col>
                    <Col xs={12} md={4}>
                    <img src={unlockicon6} alt="" classNmae="" />
                    <h3>Real-Time Notifications and Alerts</h3>
                    </Col>
                  </Row>
                </div>
                
            </Container>
        </div>

        <div className="side_product_slider6" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <h2>CMDA-Approved Plots, Agricultural Lands, Villa Plots, & More commercial and industrial</h2>
                    <p>Browse through a diverse range of plot options tailored to your specific needs. Whether you're looking for CMDA-approved plots, fertile agricultural lands, or luxurious villa plots, we have the perfect selection waiting for you.</p>
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
                    <h2>Step into the Metaverse</h2>
                    <p>Explore properties like never before with Cityplots' Metaverse experience. Utilize App Vision Pro for virtual property tours that immerse you in lifelike environments, all from the comfort of your home. Say goodbye to physical constraints and embrace the future of plot exploration.</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="side_product_slider7 mobile_view" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    
                    <Col>
                    <h2>Step into the Metaverse</h2>
                    <p>Explore properties like never before with Cityplots' Metaverse experience. Utilize App Vision Pro for virtual property tours that immerse you in lifelike environments, all from the comfort of your home. Say goodbye to physical constraints and embrace the future of plot exploration.</p>
                    </Col>
                    <Col>
                    <div className="banner_resize">
                        <img src={product_slider7} className="img-fluid" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        </>
    );
}

export default Productslider;
