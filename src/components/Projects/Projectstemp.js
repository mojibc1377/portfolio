import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjecttempCards";
import Particle from "../Particle";
import product from "../../Assets/product.jpeg";
import classifier from "../../Assets/classifier.jpeg";
import supermarket from "../../Assets/supermarket.jpeg";
import nist from "../../Assets/nist.jpeg";
import afk from "../../Assets/antiafk.jpg";
import qa from "../../Assets/qa.jpeg";
import gameworld from "../../Assets/gameworld.jpg";
import coffee from "../../Assets/coffee.jpeg";
import covid from "../../Assets/covid.jpeg"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
            <ProjectCards
              imgPath={covid}
              isBlog={false}
              title="Deep Learning COVID-19 Diagnosis"
              description="This project focuses on developing a deep learning model to detect COVID-19 from chest X-ray images. The objective is to create a robust neural network capable of accurately classifying images into COVID-19 positive and negative categories. This project leverages convolutional neural networks (CNNs) for image classification tasks, aiming for high accuracy and reliability.              "
              ghLink="https://github.com/mojibc1377/Deep-Learning-COVID-19-Diagnosis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={product}
              isBlog={false}
              title="Product-Review-Analysis-and-Recommendation-System"
              description="E-commerce Product Review Analysis and Recommendation System: This project involves analyzing product reviews to understand rating distributions, user activity, and product popularity. It also includes a recommendation system that suggests products to users based on their past ratings using a collaborative filtering approach."
              ghLink="https://github.com/mojibc1377/Product-Review-Analysis-and-Recommendation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={classifier}
              isBlog={false}
              title="Deep-Learning-Image-Classifier"
              description="This project aims to build a Convolutional Neural Network (CNN) for image classification using the CIFAR-10 dataset. The CIFAR-10 dataset consists of 60,000 32x32 color images in 10 different classes, with 6,000 images per class. The goal is to classify these images into their respective categories."
              ghLink="https://github.com/mojibc1377/Deep-Learning-Image-Classifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={supermarket}
              isBlog={false}
              title="The-Supermarket-Sales-Analysis"
              description="The Supermarket Sales Analysis project focuses on understanding and analyzing the sales data from a supermarket. The objective is to perform exploratory data analysis (EDA) to uncover insights, identify trends, and visualize key performance metrics."
              ghLink="https://github.com/mojibc1377/The-Supermarket-Sales-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={coffee}
              isBlog={false}
              title="Mobile QR code menu Càfe Flow"
              description="A web-app providing an interactive mobile QR code menu for a cafe, enabling customers to easily view and choose menu items directly from their smartphones. The app ensures a seamless and contactless dining experience."
              ghLink="https://github.com/mojibc1377/interactive-cafe-Menu"
              demoLink="http://flow-menu.ir"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={nist}
              isBlog={false}
              title="NIST-scraping"
              description="web-scraping : extract cve scores and infos from https://nvd.nist.gov/vuln/full-listing/ based on dates our main target is to extract 4 objects out of many in =~ 2000 web pages and orgnize them based on keyword in local storage in word documents/ csv files"
              ghLink="https://github.com/mojibc1377/NIST-scraping"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={afk}
              isBlog={false}
              title="antiAFKban for CS2"
              description="this script of python will let you get AFK while gaming but would't be banned due to inactivity"
              ghLink="https://github.com/mojibc1377/antiAFKban"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={qa}
              isBlog={false}
              title="Q/A"
              description="Q/A for learning questions related to tech (first project =))"
              ghLink="https://github.com/mojibc1377/Q-A-app"
              demoLink="https://q-a-urmz.onrender.com/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={gameworld}
              isBlog={false}
              title="Gameworld manager"
              description="full managing and coffeshop selling app for a gameworld cafe with ps5 and so any other options"
              ghLink="https://github.com/mojibc1377/HuLLu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
