import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home/Home";

import Dental from "./Home/Home/Dental/Dental";
import Tour from "./Home/Home/Tour/Tour";
import Toys from "./BabyToys/BabyToys";
import Navigaition from "./Home/Navigation/Navigaition";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function App() {
  const [loadin, setLoading] = useState(false);
  let [color, setColor] = useState("#1A81B6");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <div className="">
          {loadin ? (
            <div className="spiner-style App">
              <RingLoader
                color={color}
                loading={loadin}
                css={override}
                size={150}
              />
            </div>
          ) : (
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
                <Route path="/babytoys">
                  <Toys></Toys>
                </Route>
                <Route path="/Dental">
                  <Dental></Dental>
                </Route>
                <Route path="/tour">
                  <Tour></Tour>
                </Route>
                <Route path="/navigation">
                  <Navigaition></Navigaition>
                </Route>
              </Switch>
            </BrowserRouter>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
