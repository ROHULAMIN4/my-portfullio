import React from "react";
import "./Test.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Test = () => {
  return (
    <>
      <div className="myskill">
        <h2 className="skill-title">MY SKILL</h2>
        <div className="total-skill row">
          <div className="skill-container col-lg-6 col-sm-12">
            <ul>
              <li className="html">Html</li>
              <li className="css">css</li>
              <li className="js">Manterial UI</li>
              <li className="boostrap">boostrap</li>
              <li className="tailwind">Taiwind</li>
            </ul>
          </div>
          <div className="skill-container col-lg-6 col-sm-12">
            <ul>
              <li className="JavaScript">JavaScript</li>
              <li className="React">React js</li>
              <li className="Node">Node js</li>
              <li className="MongoDB">MongoDB</li>
              <li className="Firebase">Firebase</li>
            </ul>
          </div>
        </div>
      </div>

      {/* eath animation */}
    </>
  );
};

export default Test;
