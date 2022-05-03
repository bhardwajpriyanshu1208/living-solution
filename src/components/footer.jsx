import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="mt-5 footer-text">
      <h3>
        <strong>FOLLOW US</strong>
      </h3>
      <Container>
        <Row className="footer-icons mt-5">
          <Col md="3">
            <FaFacebook />
          </Col>
          <Col md="3">
            <AiFillInstagram />
          </Col>
          <Col md="3">
            <AiFillGithub />
          </Col>
          <Col md="3">
            <AiFillLinkedin />
          </Col>
        </Row>
      </Container>
      <p className="text-center">Copyright © 2022</p>
    </div>
  );
}

export default Footer;
