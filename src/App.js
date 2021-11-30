import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home/Home";
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
    <div className="App">
      {loadin ? (
        <div className="spiner-style">
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
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
