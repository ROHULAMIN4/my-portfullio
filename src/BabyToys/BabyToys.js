import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Aos from "aos";
import Typist from "react-typist";
import "aos/dist/aos.css";
import "./Babytoys.css";
import { Link } from "react-router-dom";
const Toys = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="tour-event">
        <h2 className="tour-head">Baby Toys</h2>
        <span className="typis-head">Used Technology</span>
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span className="typis-display">
            firebase,React js,React boostrap,nodejs node express,MongoDB,heroku
          </span>
        </Typist>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12 mt-4"
            data-aos="zoom-in-down"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/s9TvHMn/baby1.png"
              />
            </Card>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 mt-4"
            data-aos="zoom-in-down"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/gS2rPrQ/baby2.png"
              />
            </Card>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 mt-4"
            data-aos="zoom-in-down"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/n73yRN1/babytoys.png"
              />
            </Card>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 mt-4"
            data-aos="zoom-in-down"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/Lv5FSYy/baby3.png"
              />
            </Card>
          </div>
        </div>
        <div className="hinnden1">
          <a href=" https://baby-toys-6042d.web.app/">
            <Button variant="primary">Live site</Button>
          </a>
          <a href="https://github.com/ROHULAMIN4/Baby_toys">
            <Button variant="primary">github</Button>
          </a>
          <Link to="/">Back to home page</Link>
        </div>
      </div>
    </>
  );
};

export default Toys;
