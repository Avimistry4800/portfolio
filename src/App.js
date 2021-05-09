import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import MyService from "./Components/Home/MyService/MyService";
import AllProjects from "./Components/Home/AllProjects/AllProjects";
import AboutMe from "./Components/Home/AboutMe/AboutMe";
import ContactMe from "./Components/Home/ContactMe/ContactMe";
import Blogs from "./Components/Home/Blogs/Blogs";

function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/MyService">
            <MyService/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <AboutMe/>
          </Route>
          <Route path="/contact">
            <ContactMe/>
          </Route>
          <Route path="/blog">
            <Blogs/>
          </Route>
          <Route path="/project">
            <AllProjects/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
