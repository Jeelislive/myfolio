import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Added Button
import { Link } from "react-router-dom"; // Added Link
import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle"; // Moved to App.js
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */} {/* Moved to App.js */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JEEL RUPARELIYA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <div style={{ marginTop: "30px", textAlign: "left", paddingLeft: "50px" }}>
                <Link to="/project">
                  <Button variant="primary" size="lg" className="home-cta-button">
                    View My Work
                  </Button>
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
