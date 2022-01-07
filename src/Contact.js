import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Contact Me</h1>

        <div className="phone">
          <i className="fa fa-phone"> </i>

          <a tel="+91 9783224446" target="_blank" rel="noreferrer">
            +91 9783224446
          </a>
        </div>

        <a href="https://github.com/Pooja9783" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-sankhala-a13b53199/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/poojasankhala97/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/poojasankhala9"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a href="mailto: poojasankhala97@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
