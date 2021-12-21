import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import ReactDOM from "react-dom";
import "./Navigation.css";
import Typist from "react-typist";
import { Link } from "react-router-dom";
const Navigaition = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="app-style">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div className="icons-style">
          <p>
            <a href=" https://www.facebook.com/urmi.rd/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </p>
          <p>
            <a href=" https://twitter.com/RohulAm16659212" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </p>
          <p>
            <a
              href=" https://www.linkedin.com/in/rohul-amin-2555b3216/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/rohulamin24/ " target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </p>
          <p>
            <a href=" https://github.com/ROHULAMIN4" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="typist">
        {count ? (
          <>
            <div>
              <img
                className="iconsimg"
                src="https://i.ibb.co/LkqxRnS/195-removebg-preview.png"
                alt=""
              />
              <p className="typis-head">I am Rohul Amin</p>
              <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span className="typis-display">full stract web developer</span>
                <Typist.Backspace count={30} delay={1000} />
                <span className="typis-display">MERN strack developer</span>
                <Typist.Backspace count={30} delay={1000} />
                <span className="typis-display">React js developer</span>
                <Typist.Backspace count={20} delay={1000} />
              </Typist>
              <div className="about-button-style">
                <a
                  // className="mt-5"
                  href="https://drive.google.com/file/d/1X1c9W9VNX734KNJgFFUMac6xZ3DObO3D/view?usp=sharing"
                  target="_blank"
                >
                  <button type="button" class="btn btn-secondary resume">
                    Download Resume
                  </button>
                </a>
                <a
                  id="about-me-button"
                  // style={{ textDecoration: "none", paddingLeft: "7px" }}
                  href="#about"
                >
                  About Me <i class="fas fa-arrow-down"></i>
                </a>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Navigaition />, rootElement);
export default Navigaition;
