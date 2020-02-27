import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
class App extends Component {
  render() {
    return (
      <div className="App-outer-container">
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
