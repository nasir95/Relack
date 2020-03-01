import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import userService from "./utils/userService";

class App extends Component {
  state = {
    user: userService.getUser()
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App-outer-container">
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Dashboard
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
