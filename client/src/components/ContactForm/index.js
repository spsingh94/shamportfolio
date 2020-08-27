import React from "react";
import axios from "axios";
import "./style.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  // button = document.getElementById("sub-but").addEventListener('touchend', submit);

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8080/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        document.getElementById("success-p").innerHTML = "Message Sent!";
        this.resetForm();
      } else if (response.data.status === "fail") {
        document.getElementById("success-p").innerHTML = "Message Failed";
      }
    });
  }

  handleTouchEvent(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8080/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        document.getElementById("success-p").innerHTML = "Message Sent!";
        this.resetForm();
      } else if (response.data.status === "fail") {
        document.getElementById("success-p").innerHTML = "Message Failed";
      }
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      // <div className="App">
      <form
        className="App"
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            placeholder="John Doe"
            type="text"
            className="form-control"
            id="name"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            placeholder="example@example.com"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Your Message"
            className="form-control"
            rows="5"
            id="message"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
          />
        </div>
        {/* <button type="submit" name="submit" className="btn btn-primary"> Submit </button> */}
        <input
          type="submit"
          name="submit"
          value="submit"
          className="btn btn-primary"
          id="sub-but"
          onTouchEnd={this.handleTouchEvent.bind(this)}
        />
        <p id="success-p"></p>
      </form>
      // </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
