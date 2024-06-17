import React from "react";
import { Row, Col } from "react-bootstrap";

function Certificates() {
  const certificates = [
    
    
    
    {
      title: "Databases and SQL for Data Science with Python",
      image: "/Databases and SQL for Data Science with Python.png"
    },
    {
      title: "Python for Data Science AI & Development",
      image: "/Python for Data Science, AI & Development.png"
    }
    ,{
      title: "Python Project for Data Science",
      image: "/Python Project for Data Science.jpg"
    },{
      title: "Data Analysis with Python",
      image: "/Data Analysis with Python.jpg"
    },{
      title: "Data Visualization with Python",
      image: "/Coursera FHLB6WVNS6KW.jpg"
    },{
      title: "What is Data Science?",
      image: "/What is Data Science.png"
    },{
      title: "Data Science Methodology",
      image: "/Data Science Methodology.png" // replace with your image path
    },{
      title: "Tools for Data Science",
      image: "/Tools for Data Science.png"
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {certificates.map((cert, index) => (
        <Col key={index} xs={12} md={6} lg={4} className="cert-col">
        <div className="image-container">
          <img src={cert.image} alt={cert.title} className="cert-image" />
          <div className="title-overlay">{cert.title}</div>
        </div>
      </Col>      
      ))}
    </Row>
  );
}

export default Certificates;
