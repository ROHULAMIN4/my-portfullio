import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Myproject.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Myproject = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className=" baclground-row">
          <h2 className="project-head"> My Some project</h2>
          <div className="row row1">
            <div className="col-lg-4 col-sm-12 box-img" data-aos="zoom-in-down">
              <div className="shado-img">
                <h3 className="headline">Dental Hospital</h3>
              </div>

              <Link to="/Dental">
                <Button className="mt-4" variant="success">
                  Website Details
                </Button>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-12 box-img" data-aos="zoom-in-down">
              <div className="shado-img1">
                <h3 className="headline">baby Toys</h3>
              </div>

              <Link to="/babytoys">
                <Button className="mt-4" variant="success">
                  Website Details
                </Button>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-12 box-img" data-aos="zoom-in-down">
              <div className="shado-img2">
                <h3 className="headline">Happy Tour</h3>
              </div>

              <Link to="/tour">
                <Button className="mt-4" variant="success">
                  Website Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myproject;
