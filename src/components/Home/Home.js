import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/photo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Raviraj_Indraganti.pdf";
import {AiOutlineDownload, AiOutlineHome} from "react-icons/ai";
import about from "../About/About"
import {NavLink, useHistory, useNavigate} from "react-router-dom";
import About from "../About/About";
import LikeButton from '../LikeButton/LikeButton'



function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {


    navigate("/about");
  };

  const [expand, updateExpanded] = useState(false);



  // let history = useHistory();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" fluid="md">
          <Row>


            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Raviraj Indraganti</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, right : 50}}>
              <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "320px", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "5px"}}
              />
            </Col>

          </Row>
        </Container>
        {/* <Like /> */}
        <LikeButton/>
        <NavLink to="/about">
          <Button variant="primary">
            Click to know more about me!
          </Button>
        </NavLink>
        <br/>
        <br/>

      </Container>
      <Particle />
    </section>
  );
}

export default Home;
