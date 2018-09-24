import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import "../styles.css";

class NavBar extends Component {
  render() {
    return (
      <div className="limiter">
        <nav className="navbar navbar-dark bg-dark navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                GHS OpenSpace
              </a>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="home.html" className="nav-link">
                  <span className="glyphicon glyphicon-log-in" /> Home
                </a>
              </li>
              <li className="nav-item">
                <a href="signup.html" className="nav-link">
                  <span className="glyphicon glyphicon-user" /> Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a href="signin.html" className="nav-link">
                  <span className="glyphicon glyphicon-log-in" /> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
