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

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
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
        <button type="submit" name="submit" className="btn btn-primary">
          submit
        </button>
        <p id="success-p"></p>
      </form>
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



let getCreds = async function () {
  let response = await fetch("http://localhost:8080/api/credential");
  let data = await response.json();
  return data;
};

getCreds().then((results) => mailRunner(results));

function mailRunner(creds) {
  var transport = {
    service: "Outlook365",
    host: "smtp.office365.com", // Don’t forget to replace with the SMTP host of your provider
    port: 25,
    secure: false,
    logger: true,
    debug: true,
    ignoreTLS: true, // add this 
    auth: {
      user: creds[0].cred,
      pass: creds[3].cred,
    },
  };

//   var transporter = nodemailer.createTransport(transport);

//   transporter.verify((error, success) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take messages");
//     }
//   });

//   router.post("/send", (req, res, next) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var message = req.body.message;
//     var content = `name: ${name} \n email: ${email} \n message: ${message} `;

//     var mail = {
//       from: name,
//       to: creds[0].cred, // Change to email address that you want to receive messages on
//       subject: "New Message from Contact Form",
//       text: content,
//     };

//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: "fail",
//         });
//       } else {
//         res.json({
//           status: "success",
//         });
//       }
//     });
//   });
// }