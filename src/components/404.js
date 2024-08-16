import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Custom404() {
  return (
    <div>
      <div className="home-slider" style={{paddingTop: "10rem"}}>
        <div className="product_header">
          <Container>
            <Row>
              <Col>
                <div className="city_video">
                  <div className="content">
                      <h1>
                        <span
                          style={{
                            color: "#61ff00",
                            backgroundColor: "#61ff00",
                          }}
                        >
                          oop! <br/>
                          404&nbsp;
                        </span>
                        Page not Found
                      </h1><br/>
                      <p>The page you were looking for could not be found.</p>
                      <p className='text-btn'>Return To <a href='/'>Home Page</a></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Custom404
