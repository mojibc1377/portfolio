import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiLinux
} from "react-icons/di";
import { TbSql } from "react-icons/tb";


function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center px-4">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center align-middle self-center px-4">
        <DiLinux />
      </Col> 
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      
    </Row>

    </>
  );
}

export default Techstack;
