import React from "react";
import "./description.css";
const Description = () => {
  return (
    <>
      <div className="row-style1" id="about">
        <h1 className="about-head">About Me</h1>
        <div className="row row-style">
          <div className="col-lg-6 col-sm-12">
            <img
              className="desciptionimg"
              src="https://i.ibb.co/RYJ7C77/my-bg.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2 className="hading">
              <i>Rohul Amin</i>
            </h2>
            <p className="details">
              <i>
                ___i am Rohul Amin full stack web developer, MERN stack web
                developer , React js developer <br /> <br /> for an experienced,
                detailed-oriented, front-end web developer. As you'll see. I
                have a few months of hands-on experience efficiently coding
                websites and applications using modern HTML5, CSS3, JavaScript,
                React js, MongoDB, node js, firebase. Building state-of-the-art,
                easy-to-use, user-friendly websites and applications is truly a
                passion of mine and I am confident I would be an excellent
                addition to your
              </i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
