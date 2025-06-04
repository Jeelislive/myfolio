import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa"; // Example icon

function Hackathons() {
  const hackathonList = [
    {
      title: "Team Lead, SIH 2024",
      description: "Managed a cross-functional team to deliver real-world tech solutions in the Smart India Hackathon.",
      icon: <FaTrophy />,
    },
    {
      title: "Participant, Hack the Spring Gandhinagar",
      description: "Engineered innovative solutions for tech challenges at the hackathon locally conducted by GEC Gandhinagar.",
      icon: <FaTrophy />,
    },
    {
      title: "Participant, Techathon by Gateway Group",
      description: "Competed and developed solutions in a private company techathon hosted by Gateway Group of Companies.",
      icon: <FaTrophy />,
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={10} className="hackathon-section">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Hackathon</strong> Journey
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {hackathonList.map((hackathon, index) => (
            <Col md={4} className="hackathon-card" key={index}>
              <div className="hackathon-card-view">
                <div className="hackathon-icon">{hackathon.icon}</div>
                <h5 className="hackathon-title">{hackathon.title}</h5>
                <p className="hackathon-description">{hackathon.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Hackathons;