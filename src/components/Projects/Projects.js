import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import NOC from "../../Assets/Projects/NOC.jpg";
import currency from "../../Assets/Projects/currency.jpg";
import CHATAPP from "../../Assets/Projects/chatapp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NOC}
              videoLink="https://player.cloudinary.com/embed/?cloud_name=dupv4u12a&public_id=Noc-project-showcase_loy8u4&profile=cld-looping"
              isBlog={false}
              title="NOC Issuance System for fire department"
              description="Hackathon - SIH. Automated System which eliminates manual workflows and paperwork, reducing processing time by 50%. Features: Automated Workflow, Secure File Uploads (Cloudinary), Real-time Notifications (Socket.IO)."
              ghLink="https://github.com/Jeelislive/NOC-client"
              demoLink="https://noc-clientt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              videoLink="https://player.cloudinary.com/embed/?cloud_name=dupv4u12a&public_id=journey-showcase_uhnpkl&profile=cld-looping"
              isBlog={false}
              title="AI Trip Planner Using Weather Insights"
              description="AI-powered trip planner according to weather insights. It gives travel itineraries based on AI, with features like Anything Near Me, AI-driven Recommendations, and Weather Integration."
              ghLink="https://github.com/Jeelislive/WeatherForecaste"
              demoLink="https://weather-forecaste-vpe7.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CHATAPP}
              videoLink="https://player.cloudinary.com/embed/?cloud_name=dupv4u12a&public_id=chatapp-showcase_cmcrue&profile=cld-looping"
              isBlog={false}
              title="Real-Time Chat Application"
              description="A full-stack real-time chat application built with React, Node.js, and Socket.IO. Features instant messaging, group chats, file sharing, and notifications."
              ghLink="https://github.com/Jeelislive/chat-app-frontend"
              demoLink="https://chat-app-frontend-peach-zeta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
