import React from "react";
import Image from "./img/my.jpeg";

import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About</h1>

        <div className="about-section">
          <div className="profile-img">
            <img src={Image} alt="img" />
          </div>

          <div className="para">
            <p>
              I always wanted to have a professional career but couldn't figure
              out my way to a job. So, after completing my Post Graduation, I
              started exploring my career options.
              <br />
              <br />
              Having completed my Graduation in Arts, I never thought that I
              would be interested in becoming anything close to a full-stack web
              developer. When I was searching for a job as a data entry operator
              on LinkedIn, I came across a post related to programming. So I
              searched on google about it, got interested, and started to learn
              HTML, CSS & Javascript. Programming attracted me further, and I
              kept pursuing it, and that's when I began my journey towards
              becoming a full-stack web.
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
