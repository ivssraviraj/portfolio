import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Particle from "../Particle";
import {Col, Container, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

// npm i @emailjs/browser

const Contact = () => {
    let form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current.name);
        // if(form.current.name ===""){
        //     alert("enter user Name")
        // }else {
            emailjs
                .sendForm(
                    "service_aabi92h",
                    "template_jeenbyf",
                    form.current,
                    "jQc__-_xjgKE6XO1a"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        console.log("message sent");
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            alert("Thanks For Sharing Your Contact Information!")
            navigate('/home', { replace: true });
        // }
    };

    return (

        <Container fluid className="about-section">

            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={3}
                        style={{
                            justifyContent: "center",
                            // paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
            <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Company</label>
                    <input type="text" name="user_company" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mobile</label>
                    <input type="tel" name="user_number" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" color="#2df82d"/>
                </form>
            </StyledContactForm>
                    </Col>

                </Row>
                    </Container>
            <Particle />
        </Container>
    );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #2df82d;
      color: white;
      border: none;
    }
  }
`;