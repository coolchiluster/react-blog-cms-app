import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import logo from "../logo.svg";
// import "../App.css";
//import "../styles.css";

class Home extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>GHS OpenSpace</h1>
                  <span className="subheading">
                    Contribute a drop to the Ocean of Knowledge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
