import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mojtaba Bagheri Chenari </span>
            from <span className="purple"> Tehran, Iran</span>
            <br /> Experienced Software Developer with 8+ years of expertise in developing high-performance applications.
            <br/> Skilled in full-stack development, databases, and software design.<br/>
Aspiring full stack web developer leveraging a foundation in React.js and embarking on an exciting jourcy to master Node.js.<br/>
With a background in data science using Python, I offer a unique blend of analytical and creative thinking.<br/>
Formerly a skilled bartender for 3 years, I thrive in fast-paced, client-focused environments.<br/>
Languages:

<ul>
  <li>Persian : Mother Language</li>
  <li>English : IELTS total 7</li>
  <li>German : B2</li>
</ul>
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running Netflix marathon
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football or as some call it Soccer
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
