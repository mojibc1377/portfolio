import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cvEnglish.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="min-h-screen">
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
          &gt; <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.4} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "440px" }}
          >
            <div className="gus">
            <AiOutlineDownload />
            &nbsp;Download CV
            </div>
          </Button>
        </Row>
        </Container>

    </div>
  );
}

export default ResumeNew;
