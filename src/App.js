import React, { Component } from 'react';
import {Route, BrowserRouter} from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path={"/"} component={Root}/>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/user"} component={User}/>
          <Route path={"/home"} component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
