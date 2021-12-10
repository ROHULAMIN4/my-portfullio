import React from "react";

import "./Skill.css";
import ProgressBar from "react-animated-progress-bar";

const Skill = () => {
  return (
    <div className="skill-head">
      <h1 className="pt-4 skill-headin-main">My Skill</h1>
      <div className="Container row">
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">100</h1>
          <p className="text-style">HTML5</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">95</h1>
          <p className="text-style">CSS3</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">75</h1>
          <p className="text-style">JavaScript</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">90</h1>
          <p className="text-style">Boostarp</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">80</h1>
          <p className="text-style">MUI</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">75</h1>
          <p className="text-style">React js</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">50</h1>
          <p className="text-style">Node js</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">78</h1>
          <p className="text-style">Firebase</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">67</h1>
          <p className="text-style">Mongodb</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">40</h1>
          <p className="text-style">Heroku</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">80</h1>
          <p className="text-style">Email js</p>
        </div>
        <div className="col-lg-4 col-sm-12 single-skill">
          <h1 className=" heading-skill text-white ">40</h1>
          <p className="text-style">TypeScript.js</p>
        </div>

        {/* <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="gray"
          percentage="70"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="#333333"
          trackBorderColor="grey"
        /> */}
      </div>
    </div>
  );
};

export default Skill;
