import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="App-contact">
      <h1>Contact</h1>
      <p>
        If you would like to collaborate or have any questions, feel free to message me in the following links below.
      </p>
      <Link to="https://github.com/jsegobia0" role="button" className="btn btn-link">
        Github
      </Link>
      <Link to="https://www.linkedin.com/in/jonathan-segobia-544264213/" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Link to="jsegobia0@yahoo.com" role="button" className="btn btn-link">
        Yahoo
      </Link>
    </div>
  );
}

export default Contact;