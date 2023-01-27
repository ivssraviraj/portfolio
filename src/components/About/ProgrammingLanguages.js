import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus} from "react-icons/cg";
import {
    DiJavascript1,
    DiPython,
    DiLinux,
    DiMongodb
} from "react-icons/di";
import {
    SiMysql,
    SiJava,
    SiPhp
} from "react-icons/si";

function ProgrammingLanguages() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>

        </Row>
    );
}

export default ProgrammingLanguages;
