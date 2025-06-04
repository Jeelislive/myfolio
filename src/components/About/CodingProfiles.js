import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiLeetcode } from "react-icons/si"; // LeetCode Icon

function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Jeel404/",
      icon: <SiLeetcode />,
      description: "Solving problems and honing my algorithmic skills.",
    },
    // Add more profiles here if needed in the future
    // {
    //   name: "HackerRank",
    //   url: "your-hackerrank-url",
    //   icon: <FaHackerrank />,
    //   description: "Practicing coding challenges."
    // }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={10} className="coding-profiles-section">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Coding</strong> Profiles
        </h1>
        <Row style={{ justifyContent: "center" }}>
          {profiles.map((profile, index) => (
            <Col md={4} sm={6} xs={12} className="coding-profile-card" key={index}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="coding-profile-link">
                <div className="coding-profile-card-view">
                  <div className="coding-profile-icon">{profile.icon}</div>
                  <h5 className="coding-profile-name">{profile.name}</h5>
                  <p className="coding-profile-description">{profile.description}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default CodingProfiles;