import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Myproject.css";

const Myproject = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h3 className="project-head">My Project</h3>
      <div className="row">
        <div className="col-lg-4 cil-md-6 col-sm-12 box">
          <div>
            <img
              className="img-style"
              src="https://i.ibb.co/P5TsjKL/dental.png"
              alt=""
            />
          </div>
          <div className="Description">
            <h3 className="website-name">
              This is my awesome jerin dental Website
            </h3>
            <Link to="/Dental">
              <Button className="website-link" variant="outline-warning">
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 cil-md-6 col-sm-12 box">
          <div>
            <img
              className="img-style"
              src="https://i.ibb.co/9y9W0cX/snmae-2.png"
              alt=""
            />
          </div>
          <div className="Description">
            <h3 className="website-name">Smart watch</h3>

            <Link to="/babytoys">
              <Button className="website-link" variant="outline-warning">
                Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 cil-md-6 col-sm-12 box">
          <div>
            <img
              className="img-style"
              src="https://i.ibb.co/WxXh6VW/happytour.png"
              alt=""
            />
          </div>
          <div className="Description">
            <h3 className="website-name">Happy tour website</h3>
            <Link to="/tour">
              <Button className="website-link" variant="outline-warning">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
