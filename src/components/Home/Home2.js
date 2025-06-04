import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a dedicated and enthusiastic programmer, constantly exploring the ever-evolving world of technology. I've cultivated a solid understanding of software development principles and enjoy tackling new challenges.
              <br />
              <br />I have a strong command of core web technologies, including
              <i>
                <b className="purple"> JavaScript and TypeScript</b>
              </i>
              , and I'm adept at building robust and scalable applications.
              <br />
              <br />
              My primary areas of interest lie in crafting innovative
              <i>
                <b className="purple"> Web Technologies and Products</b>
              </i>
              . I'm also passionate about creating visually appealing and user-friendly interfaces, with a keen eye for
              <i>
                <b className="purple"> UI/UX Design </b>
              </i>
               and even dabbling in
              <i>
                <b className="purple"> Logo Designing</b>.
              </i>
              <br />
              <br />
              I thrive on bringing ideas to life using modern development practices. I'm proficient in leveraging the power of <b className="purple">Node.js</b> for back-end development and utilizing
              <i>
                <b className="purple">
                  {" "}
                  cutting-edge JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
               to build dynamic and responsive user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jeelislive"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jeelislive/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
