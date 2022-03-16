import React from "react";
import "./Project.css";
import Image from "./img/project-1.png";
import Img1 from "./img/project-3.png";
import Img2 from "./img/project-4.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="project-center">
            <div className="center">
              <div className="one">
                <img src={Image} alt="project" />
                <h2>Clone of HealthKart</h2>
                <p>
                  Built authentication and integrated it with functionallity of
                  Home Page And Signup & Signin pages.
                </p>
                <p> Used tech-stack : HTML | CSS | Javascript</p>

                <a
                  href="https://heawealthy.netlify.app/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Demo</button>
                </a>
                <a
                  href="https://github.com/bhargavkatira/construct-week1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>
              <div className="one">
                <img src={Img1} alt="project" />
                <h2>Clone of Gearbest</h2>
                <p>
                  The Landing Page of Gearbest website displays various products
                  and categories, In headers displays search bar, login, and
                  cart pages, created image carousal, and at the bottom section
                  there is a footer.
                </p>
                <p> Used tech-stack : HTML | CSS | Javascript | Nodejs</p>
                <a
                  href="https://gearbest-clone.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Demo</button>
                </a>
                <a
                  href="https://github.com/Pooja9783/gearbest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>

              <div className="one">
                <img src={Img2} alt="project" />
                <h2>Clone of Realme</h2>
                <p>
                  We developed and designed a mobile and other technological
                  products site using ReactJs and Styled components hosted on
                  heroku.
                </p>
                <p> Used tech-stack :| Nodejs | ReactJs | styled-components</p>
                <a
                  href="https://realme-masai.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Demo</button>
                </a>
                <a
                  href="https://github.com/jaidev3/RealmeConstructWeek"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
