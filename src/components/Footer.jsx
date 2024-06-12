import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MBC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://https://github.com/mojibc1377"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="tel:+905451350980"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mojtaba.bagherich@gmail.com?body=My custom mail body"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mojtaba.bagheri.chenari"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
