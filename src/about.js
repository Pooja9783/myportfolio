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
              Having completed my Graduation in Arts, I never thought that I
              would be interested in becoming anything close to a full-stack web
              developer. When i was searching a job for data entry operator on
              Linkedin i came across a post that was related to programming
              after that i searched on google about it and started to learning
              HTML, CSS & Javascript after that i found i am very much
              interested to learning Programming That's when I began my journey
              towards becoming a full-stack web developer. I'm passionate about
              coding and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
