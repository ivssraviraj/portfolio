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
import {Link, useHistory, useNavigate} from "react-router-dom";
import About from "../About/About";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Like from "../Like";


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
        <Particle />

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
                I'm
                <strong className="main-name"> Raviraj Indraganti</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, position : "absolute", right : 50}}>
              <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"

                  style={{ maxHeight: "320px" }}
              />
            </Col>

          </Row>
        </Container>
        <Like />
        {/*<Button*/}
        {/*    className="about-btn"*/}
        {/*    // variant="primary"*/}
        {/*    // type="link"*/}
        {/*    // htmlType="submit"*/}
        {/*    // href="https://ravirajindraganti.com/about"*/}
        {/*    onClick={goToAbout}*/}
        {/*    // // onSubmit={}*/}
        {/*    // // target="_blank"*/}
        {/*    // // className="fork-btn-inner"*/}
        {/*    // style={{ maxWidth: "350px" }}*/}
        {/*>*/}
        {/*  &nbsp;Click here to know more about me*/}
        {/*</Button>*/}

        {/*<Navbar.Collapse id="responsive-navbar-nav"> /!*className="ms-auto"*!/*/}
        {/*  <Nav defaultActiveKey="#home">*/}
        {/*    <Nav.Item>*/}
        {/*      <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>*/}
        {/*        <AiOutlineHome style={{ marginBottom: "2px" }} /> About*/}
        {/*      </Nav.Link>*/}
        {/*    </Nav.Item>*/}
        {/*  </Nav>*/}
        {/*</Navbar.Collapse>*/}
        {/*<Text style={{color: 'blue'}}*/}
        {/*      onPress={() => Linking.openURL('http://google.com')}>*/}
        {/*  Google*/}
        {/*</Text>*/}

        <br/>
        <br/>
        {/*<br/>*/}

      </Container>
      {/*<Home2 />*/}
    </section>
  );
}

export default Home;
