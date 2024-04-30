import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-left">
            Hi everyone ,I am <span className="purple">Mojtaba Bagheri Chenari </span>
            from <span className="purple"> Tehran, Iran</span>
            <br /> 
            Experienced Software developer with 5+ years of expertise in developing high-performance applications.
            <br/> 
Skilled in full-stack development, Databases and Software design. <br/>
Aspiring full stack developer levraging a foundation in Reactjs and Nodejs and also embarking on an exciting journy to master Nextjs <br/>
with a background in data science using Python , I offer a uniqe blend of analytical and creative thinking . <br/>
Formerly a skilled bartender for 3 years , I thrive in fast-paced client-focused environments. <br/>
<br/>
Languages : 

<ul className="activity">
  <li className="about-activity flex flex-row">Persian : Mother Language</li>
  <li className="about-activity flex flex-row">English : IELTS total 7</li>
  <li className="about-activity flex flex-row">German : B2</li>
</ul>
            <br />
            <br />
            Some of my hobbies are 
          <ul className="activity">
            <li className="about-activity flex flex-row">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running Netflix marathon
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
