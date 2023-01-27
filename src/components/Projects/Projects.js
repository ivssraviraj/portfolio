import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import crypt from "../../Assets/Projects/crypt.png";
import market from "../../Assets/Projects/market.png";
import iot from "../../Assets/Projects/iot.png";
import linkedin from "../../Assets/Projects/linkedin.png";
import blackfriday from "../../Assets/Projects/Black-Friday.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/*<h1 className="project-heading">*/}
        {/*  My Recent <strong className="yellow">Works </strong>*/}
        {/*</h1>*/}
        {/*<p style={{ color: "white" }}>*/}
        {/*  Here are a few projects I've worked on recently*/}
        {/*</p>*/}

        <h1 className="project-heading">
          <strong className="yellow">⚒️⚒️⚒️Here are my few recent projects⚒️⚒️⚒️</strong>
        </h1>

        {/*Downtime starts*/}
        {/*<h1 className="project-heading">*/}
        {/*  <strong className="yellow">Page Updating.... meanwhile feel free to go to my Github</strong>*/}
        {/*</h1>*/}
        {/*<h1 className="project-heading">*/}
        {/*  <strong className="yellow">Sorry for the inconvenience </strong>*/}
        {/*</h1>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*Downtime ends*/}


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="IoT & Smart Meter Management system"
              description="A SaaS Application using which we can manage IoT devices and Smart meters. Contains Monitor&Tracking, Configuration, User Management, Billing Component, etc. Built using MERN stack, AWS, kubernetes, Docker, Multi-threading."
              ghLink="https://github.com/ivssraviraj/Smart-meter-backend"
              demoLink="https://youtu.be/VtEs2G7VCRo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Spartan Marketplace"
              description="Marketplace consists of various businesses under one roof to reduce search time and to provide numerous options of businesses to the users. Built using: HTML, CSS, PHP, MySQL, LAMP stack"
              ghLink="https://github.com/ivssraviraj/Spartan-Marketplace"
              demoLink="marketplace.ravirajindraganti.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={crypt}
                isBlog={false}
                title="Cryptospoor"
                description="Created a fully Responsive Crypto Tracking app built with ReactJS, Redux and Ant Design. Displayed top 100 cryptocurrencies and the latest news, events related to a specific coin, reducing 80% of research time. Provided detailed information on each cryptocurrency, including the price chart with different time frames."
                ghLink="https://github.com/ivssraviraj/CryptoSpoor"
                demoLink="https://heartfelt-crumble-85a0b1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={linkedin}
                isBlog={false}
                title="LinkedIn-Clone"
                description="Created a LinkedIn - Clone from scratch using React JS and Google cloud’s Firebase. Added features to make posts consisting of images or video links and to store them in Firestore. Used Google Authenticator to authenticate users with Gmail sign-in. Utilized: Firestore, Firebase, Google Authenticator, Redux, React JS, Styled components."
                ghLink="https://github.com/ivssraviraj/LinkedIn-Clone"
                demoLink="https://naughty-lumiere-e6c035.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackfriday}
              isBlog={false}
              title="Black Friday Sales Prediction"
              description="Increased Black friday sales of a company by targeting specific customers using Machine Learning"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Designed and Developed Portfolio website to engage with you in a more interactive way!!!"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://ravirajindraganti.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
