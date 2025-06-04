import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'm <span className="purple">Jeel Rupareliya</span>, a passionate and results-oriented Information Technology student based in <span className="purple">Ahmedabad, India.</span>
            <br />
            I'm currently pursuing my Bachelor of Engineering (B.E.) in IT from Vishwakarma Government Engineering College (VGEC), where I'm honing my skills in software development and problem-solving.
            <br />
            My journey into tech began with a strong foundation in science from Oxford School of Science, Amreli, and has since evolved into a deep fascination with building innovative and impactful digital solutions.
            <br />
            <br />
            Beyond the world of code, I find joy and inspiration in a few other activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sharpening my strategic thinking through Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuously learning and exploring new technologies on platforms like Stack Overflow
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new perspectives and cultures through Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            "Driven by curiosity, I strive to build things that not only work efficiently but also make a meaningful difference."{" "}
          </p>
          <footer className="blockquote-footer">Jeel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
