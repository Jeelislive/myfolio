import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency from "../../Assets/Projects/currency.jpg";
import NOC from "../../Assets/Projects/NOC.jpg";
import CHATAPP from "../../Assets/Projects/chatapp.jpg";

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
            <ProjectCard
              imgPath={NOC}
              isBlog={false}
              title="NOC Generator"
              description="A real-time monitoring and evaluation software for application received in Fire Department relating to inspections, follow-ups, issue of NOCs and such licensing requirement so as to ensusre automatic system monitoring without any manual support."
              ghLink="https://github.com/Jeelislive/NOC-client"
              demoLink="https://noc-clientt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CHATAPP}
              isBlog={false}
              title="Chat-app"
              description="Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO to enable seamless communication."
              ghLink="https://github.com/Jeelislive/chat-app-frontend"
              demoLink="https://chat-app-frontend-peach-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="Created a dynamic currency converter application using React for the front-end and integrating real-time exchange rate data via a third-party API. The application allows users to effortlessly convert between multiple currencies, featuring a responsive and intuitive interface."
              ghLink="https://github.com/Jeelislive/CurrencyConverter"
              demoLink="https://currency-converter-snowy-seven.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
