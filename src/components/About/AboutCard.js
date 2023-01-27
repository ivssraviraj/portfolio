import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I am <span className="yellow">Raviraj Indraganti </span>
            from <span className="yellow"> San Jose, California.</span>
            <br />

          </p>
          <p className="home-about-body">👋I’m a graduate student at San Jose State University, specializing in Software Engineering.
            I’ve previously worked at AppViewX as a Software Development Engineer. During which I gained a good amount of hands on experience,
            also I got to meet amazing people and grasped many things from their experiences and feedback.`</p>
          <br/>
          <p className="home-about-body">I’ve gained my experience by doing numerous projects and by learning from others.
            Most recently, I've led a team of 4 people to develop a platform to manage Smart meters and IoT devices.`</p>
          <br/>
          <p className="home-about-body">With our technology developing very rapidly, I believe that this is an excellent
            industry to be a part of. This motivates me to keep thinking of groundbreaking
            business ideas and strive to develop efficient solutions to the problems I face.`</p>
          <br/>
          <p className="home-about-body">When I’m not coding, you’ll find me playing Cricket🏏 or badminton🏸, jamming to pleasant music,
            watching comedy, on Google maps in the middle of no-where and Exploring new things.
            Feel free to reach out, we can talk about tech or anything else that's fun. 😀`</p>
          <br/>
          {/*<br />*/}
          {/*<br />*/}
          {/*<br />*/}
          <p style={{ color: "#2df82d" }}>If I'm not coding, I might be....!</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket or Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things
            </li><li className="about-activity">
            <ImPointRight /> Planning for Lunch or Dinner
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
    
          <p style={{ color: "#2df82d" }}>
            "In order to be irreplaceable, one must always be different!"{" "}
          </p>
          <footer className="blockquote-footer"> not  by ME</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
