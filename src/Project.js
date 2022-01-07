import React from "react";
import "./Project.css";
import Image from "./img/project-1.png";
import Img from "./img/project-2.png";
import Img1 from "./img/project-3.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="center">
            <div className="one">
              <img src={Image} alt="project" />
              <h2>Clone of HealthKart</h2>
              <p>
                HealthKart is an online health and fitness store for men and
                women, which offers fitness products, services and community to
                help consumers achieve their fitness goals.
              </p>
              <p>Teck-Stack: HTML | CSS | Javascript</p>

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
                Gearbest is an online platform for the best cell phones,
                electronic gadgets, toys, sporting goods, and home products.
              </p>
              <p>Teck-Stack: HTML | CSS | Javascript | Nodejs</p>
              <a
                href="https://elated-jennings-7a51a8.netlify.app/"
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
              <img src={Img} alt="project" />
              <h2>Clone of Pluralsight</h2>
              <p>
                Pluralsight offers a variety of video training courses for
                software developers, IT administrators, and creative
                professionals through its website
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | Nodejs | MongoDB | Express
              </p>

              <a
                href="https://aadityaneve.github.io/Clone-Pluralsight/pages/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/aadityaneve/Clone-Pluralsight"
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
  );
}
