import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home.html" component={Home} />
        <Footer />
      </div>
    );
  }
}

export default App;
