import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Myproject.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
              <div className="hinnden">
                <p className="hidden-title">
                  {" "}
                  Used technology: firebase,React js,React boostrap,nodejs node
                  express,MongoDB{" "}
                </p>

                <a href=" https://dental-helathcare.web.app/home">
                  <Button variant="outline-warning">Live site</Button>{" "}
                </a>
                <a href=" https://github.com/ROHULAMIN4/Jerin-Dental">
                  <Button variant="outline-warning">github</Button>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 box-img" data-aos="zoom-in-down">
              <div className="shado-img1">
                <h3 className="headline">baby Toys</h3>
              </div>
              <div className="hinnden">
                <p className="hidden-title">
                  {" "}
                  Used technology: firebase,React js,React boostrap,nodejs node
                  express,MongoDB{" "}
                </p>

                <a href=" https://baby-toys-6042d.web.app/">
                  <Button variant="outline-warning">Live site</Button>{" "}
                </a>
                <a href=" https://github.com/ROHULAMIN4/Baby_toys">
                  <Button variant="outline-warning">github</Button>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 box-img" data-aos="zoom-in-down">
              <div className="shado-img2">
                <h3 className="headline">Happy Tour</h3>
              </div>
              <div className="hinnden">
                <p className="hidden-title">
                  {" "}
                  Used technology: firebase,React js,React boostrap,nodejs node
                  express,MongoDB{" "}
                </p>

                <a href=" https://dental-helathcare.web.app/home">
                  <Button variant="outline-warning">Live site</Button>{" "}
                </a>
                <a href=" https://github.com/ROHULAMIN4/Happy-Tour">
                  <Button variant="outline-warning">github</Button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myproject;
