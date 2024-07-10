import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from 'react-bootstrap/Modal';
// import logo from '../images/logo.png';
import new_logo from "../images/new_logo.png";
import home from "../images/home.svg";
import setting from "../images/setting.svg";
import about from "../images/about.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import social from "../images/social.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import ModalForm from "./ModalForm.js";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="header_nav" data-aos="fade-down">
        <div className="cotainer">
          <div className="row">
            <div className="col-sm-12">
              <Navbar expand="lg" className="is-sticky">
                <Container fluid>
                  <Navbar.Brand href="/">
                    <img src={new_logo} className="header_logo" alt=""/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey="/" className="me-auto-right navbar-nav">
                      <nav>
                        <Link
                          activeClassName="selected"
                          className="nav-link"
                          to="/"
                        >
                          <img src={home} className="logo-setting" alt=""/>
                          Home
                        </Link>
                      </nav>
                      <nav>
                        <Link className="nav-link" to="/about">
                          <img src={about} className="logo-setting" alt=""/>
                          About
                        </Link>
                      </nav>
                      {/* <nav>
                        <Link className="nav-link" to="/maraimalainagar-plots">
                          <img src={setting} className="logo-setting" alt=""/>
                          Services
                        </Link>
                      </nav> */}
                      <NavDropdown title="Service" data-bs-theme="light">
                        <NavDropdown.Item href="maraimalainagar-plots" id="nav-dropdown">Residential</NavDropdown.Item>  
                        <NavDropdown.Item href="" id="nav-dropdown">Commercial</NavDropdown.Item>
                        <NavDropdown.Item href="" id="nav-dropdown">Industrial</NavDropdown.Item>
                      </NavDropdown>
                      <nav>
                        <Link className="nav-link" to="/">
                          <IoNewspaperOutline className="logo-setting2" />
                          News Update
                        </Link>
                      </nav>
                      <nav>
                        <Link className="nav-link" to="/newblog">
                          <IoNewspaperOutline className="logo-setting2" />
                          Blog
                        </Link>
                      </nav>
                      <nav>
                        <Link
                          className="nav-link"
                          to="contact-us"
                        >
                          <RiContactsLine className="logo-setting2" />
                          Contact Us
                        </Link>
                      </nav>
                    </Nav>
                    <nav>
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={handleShow}
                      >
                        <div className="booknow_btn">
                          Book Now
                          <span>
                            <img src={social} alt=""/>
                          </span>
                        </div>
                      </Link>
                    </nav>
                    <nav>
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={() =>
                          window.location.replace("/#social-network")
                        }
                      >
                        <div className="social_btn">
                          Social Networks
                          <span>
                            <img src={social} alt=""/>
                          </span>
                        </div>
                      </Link>
                    </nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
      <Modal id="modal-index" show={show} onHide={handleClose} animation={false} size="lg"
      centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Body closeButton>
          <button
            className={"btn-close closeBtn"}
            onClick={handleClose}
          ></button>
          <ModalForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
