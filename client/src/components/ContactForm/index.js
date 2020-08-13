import React from "react";
import "./style.css";
import Axios from "axios";
import Container from "../Container";
import Row from "../Row";
import { Title } from "../Title";
import { Input } from "../Input";
import Button from "../Button";
import { Icons } from "../Icons";
import { Center } from "../Center";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  scrollToMap = () => {
    window.scrollTo({ top: 1730, behavior: "smooth" });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <Container>
          <br />
          <Center>
            <Title id="sub-title">Lets Connect!</Title>
          </Center>
          <p style={{ textAlign: "center" }}>
            Provide me with some of your information and a short message and I
            will get back to you at my earliest convenience.
          </p>
          <Center>
            <a href="mailto:spsingh94.ss@gmail.com">
              <Icons>email</Icons>
            </a>
            <Icons onClick={this.scrollToMap}>add_location</Icons>
            <a href="tel:+4144002564">
              <Icons>phone</Icons>
            </a>
          </Center>
          <div>
            <Row>
              <h5>Name:</h5>
              <input
                id="full-name"
                name="name"
                type="text"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleChange}
                style={{width:"500px"}}
              />
            </Row>
            <Row>
              <h5>Email:</h5>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
                style={{width:"5000px"}}
              />
            </Row>
            <Row>
              <h5>Message:</h5>
              <textarea
                id="message"
                name="message"
                as="textarea"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange}
                rows="9"
                cols="110"
                style={{
                  marginLeft: "20px",
                  width: "85%",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </Row>
          </div>
          <Center>


            <button
              style={{ width: "75%", color: "white" }}
              type="submit"
              disabled={this.state.disabled}
              className="d-inline-block"
              >
              Submit
            </button>
                            {this.state.emailSent === true && (
                              <p className="d-inline success-msg">Email Sent</p>
                            )}
                            {this.state.emailSent === false && (
                              <p className="d-inline err-msg">Email Not Sent</p>
                            )}
          </Center>
          <br />
        </Container>
      </form>
    );
  }
}

export default ContactForm;
