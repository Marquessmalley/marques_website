import React, { useState } from "react";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const payLoad = {
      name: formdata.name,
      email: formdata.email,
      subject: formdata.subject,
      message: formdata.message,
    };
    // POST IN TERMINAL
    // axios({
    // method: "post",
    //   url: "/api/save",
    //   data: payLoad,
    // })
    //   .then(() => {
    //     console.log("Data successfully sent");
    //   })
    //   .catch(() => {
    //     console.log("Has been a error");
    //   });

    // POST IN BROWERS
    // axios.post("/api/save", payLoad).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log("has been a error", error);
    //   }
    // );

    axios({
      method: "post",
      url: "http://localhost:8080/api/save",
      data: payLoad,
    });
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // // Error Checking
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("You message has been sent!!!");
    }
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };
  console.log("State:", formdata);

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:name@example.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
              action="post"
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
