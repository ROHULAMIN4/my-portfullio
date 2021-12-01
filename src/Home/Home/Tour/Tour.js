import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Aos from "aos";
import Typist from "react-typist";
import "aos/dist/aos.css";
import "./Tour.css";
import { Link } from "react-router-dom";
const Tour = () => {
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
        <h2 className="tour-head">Happy Tour</h2>
        <span className="typis-head">Used Technology</span>
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span className="typis-display">
            firebase,React js,React boostrap,nodejs node express,MongoDB
          </span>
        </Typist>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/dKsyttV/tour1.png"
              />
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/f8031rC/tour33.png"
              />
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/RTNFkVX/tour7.png"
              />
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/sRLwQRS/tour2.png"
              />
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/B4nn7Pc/tour5.png"
              />
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2" data-aos="flip-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/9THRnjd/happytour.png"
              />
            </Card>
          </div>
        </div>
        <div className="hinnden1">
          <p className="hidden-title">
            {" "}
            Used technology: firebase,React js,React boostrap,nodejs node
            express,MongoDB{" "}
          </p>

          <a href="https://world-tour-agency.web.app/home">
            <Button variant="primary">Live site</Button>{" "}
          </a>
          <a href="https://github.com/ROHULAMIN4/Happy-Tour">
            <Button variant="primary">github</Button>{" "}
          </a>
          <Link to="/">Back to home page</Link>
        </div>
      </div>
    </>
  );
};

export default Tour;
