import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt"; // Added Tilt import
// import Particle from "../Particle"; // Removed Particle import
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Hackathons from "./Hackathons"; // Import Hackathons component
// import CodingProfiles from "./CodingProfiles"; // Commented out CodingProfiles import

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */} {/* Removed Particle component */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}> {/* Added alignItems center */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex", // Added for centering Tilt
              justifyContent: "center", // Added for centering Tilt
              alignItems: "center", // Added for centering Tilt
              paddingTop: "50px", // Adjusted padding
              paddingBottom: "50px"
            }}
            className="about-img"
          >
            <Tilt>
              <img src={laptopImg} alt="about" className="img-fluid rounded shadow-lg" /> {/* Added classes for styling */}
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Hackathons /> {/* Add Hackathons section */}

        {/* <CodingProfiles /> */} {/* Commented out CodingProfiles section */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
