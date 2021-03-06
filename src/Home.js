import React, { useState } from "react";
import "./Home.css";
import Image from "./img/my.jpg";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <span className="logo-name">&lt;</span>
            <p>Pooja Sankhala</p>
            <span className="logo-name">/&gt;</span>
          </div>
          <div className="navigation pxy__30">
            <div className="ul-li">
              <ul className="navbar d__flex">
                <a href="#Home">
                  <li className="nav__items mx__15">Home</li>
                </a>
                <a href="#about">
                  <li className="nav__items mx__15">About</li>
                </a>
                <a href="#About">
                  <li className="nav__items mx__15">Skills</li>
                </a>
                <a href="#projects">
                  <li className="nav__items mx__15">Projects</li>
                </a>
                <a href="#Contact">
                  <li className="nav__items mx__15">Contact</li>
                </a>
              </ul>
            </div>
          </div>

          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">Skills</a>
                </li>
                <li className="sideNavbar">
                  <a href="#projects">Projects</a>
                </li>

                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <hr />

        {/* HOME CONTENT */}

        <div className="home-center" id="Home">
          <div className="container">
            <div className="home__content">
              <div className="profile-img">
                <img src={Image} alt="img" />
              </div>
              <div className="home__meta">
                <h2 className="home__text pz__10">Hi there, </h2>
                <h2 className="home__text pz__10">I???m Pooja Sankhala</h2>
                <h3 className="home__text sweet pz__10">
                  Full-Stack Web Developer.
                </h3>
                <p>
                  Keen to learn new things || Enthusiatic to solve problems.
                </p>
                <div className="resume-option">
                  <a href="Pooja_Sankhala.pdf" download="Pooja_Sankhala.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
