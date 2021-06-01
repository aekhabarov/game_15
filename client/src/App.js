import "./App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pictures from "./components/Pictures/Pictures";
import Profile from "./components/Profile/Profile";
import Game from "./components/Game/Game";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [access, setAccess] = useState(false);
  return (
    <div className="wrapper">
      <Router>
        <Navbar access={access} />
        <Switch>
          <Route exact path="/">
            <h1 className="greeting">Добро пожаловать в игру пятнашки!</h1>
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/pictures">
            <Pictures />
          </Route>
          <Route exact path="/profile">
            <Profile access={access} setAccess={setAccess} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
