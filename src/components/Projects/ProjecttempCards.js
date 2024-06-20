import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" className="image-card" src={props.imgPath} alt="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left", paddingInline:"10px" }}>
          {props.description}
        </Card.Text>
        <div className="card-buttons">
        <Button variant="primary" href={props.ghLink} target="_blank">
        <div className="gus">

          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </div>
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <div className="gus">

            <CgWebsite /> &nbsp;
            {"Demo"}
            </div>
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
