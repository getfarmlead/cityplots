import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mainbanner from "../images/social/Banner 1.png";
import comment1 from "../images/comment_1.png";
import comment2 from "../images/comment_2.png";
import mainbanner2 from "../images/mainbanner-svg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from "react-typist";

function Slider() {
  return (
    <>
      <div className="home-slider">
        {/* <h2>
          INDIA'S FIRST AI DRIVEN
          <br />
          INVESTMENT<span>PORTAL</span>
        </h2>
        <img src={mainbanner} className="img-fluid" /> */}

        <div className="product_header">
          <Container>
            <Row>
              <Col>
                <div className="city_video">
                  <div className="content">
                    {/* <h2>
                      INDIA'S 1ST AI DRIVEN
                      <br />
                      INVESTMENT{" "}
                      <span
                        style={{ color: "#61ff00", backgroundColor: "#61ff00" }}
                      >
                        PORTAL
                      </span>
                    </h2> */}
                    <Typist className="no-cursor" avgTypingDelay={70}>
                      <h1>
                      LEADING 1ST AI DRIVEN
                        <br />
                        INVESTMENT{" "}
                        <span
                          style={{
                            color: "#61ff00",
                            backgroundColor: "#61ff00",
                          }}
                        >
                          PORTAL
                        </span>
                      </h1>{" "}
                    </Typist>
                  </div>
                  <div className="container">
                    <div className="image-container">
                      <div className="overlay-image">
                        <img
                          src={mainbanner}
                          className="image-background"
                          alt="Main Banner"
                        />
                        <img
                          src={comment1}
                          className="small-image comment1" // Add a class for styling
                          alt="comment 1"
                        />
                        <img
                          src={comment2}
                          className="small-image comment2" // Add a class for styling
                          alt="comment 2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Slider;
