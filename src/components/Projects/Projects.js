import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle"; // Removed Particle import
import currency from "../../Assets/Projects/currency.jpg"; // Placeholder for AI Trip Planner, update if new image available
import NOC from "../../Assets/Projects/NOC.jpg";
import CHATAPP from "../../Assets/Projects/chatapp.jpg";
// import blog from "../../Assets/Projects/blog.png"; // Example if you add a new image for AI Trip Planner

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */} {/* Removed Particle component */}
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
              title="NOC Issuance System"
              description="Hackathon - SIH. Automated System which eliminates manual workflows and paperwork, reducing processing time by 50%. Features: Automated Workflow, Secure File Uploads (Cloudinary), Real-time Notifications (Socket.IO)."
              ghLink="https://github.com/Jeelislive/NOC-client"
              demoLink="https://noc-clientt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency} // Placeholder: Replace with actual image for AI Trip Planner e.g., aiTripPlannerImg
              isBlog={false}
              title="AI Trip Planner"
              description="Personal Project. AI-powered trip planner according to weather insights, which gives travel itineraries based on AI. Features: Anything Near me, AI-Driven Recommendations, Weather Integration."
              ghLink="https://github.com/Jeelislive/WeatherForecaste"
              demoLink="https://weather-forecaste-vpe7.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CHATAPP}
              isBlog={false}
              title="Real-Time Chat Application"
              description="Full-stack real-time chat application. Features: Instant Messaging, Group Chats."
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
