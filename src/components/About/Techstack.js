import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,

  DiGit,
  DiAws,
  DiDocker,
  DiGithub,
  DiHtml5,
  DiJenkins,
  DiRedis,
  DiCss3


} from "react-icons/di";
import {

    SiAmazons3,
    SiApachekafka,
    SiKubernetes

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApachekafka />
        </Col>
    </Row>
  );
}

export default Techstack;
