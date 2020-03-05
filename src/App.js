import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import userService from "./utils/userService";
import channelsService from "./utils/channelsService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      channels: []
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleUpdateChannels = async () => {
    const channels = await channelsService.index();
    this.setState({ channels: channels });
    console.log(channels);
  };

  async componentDidMount() {
    this.handleUpdateChannels();
  }

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
                  handleUpdateChannels={this.handleUpdateChannels}
                  channels={this.state.channels}
                  user={this.state.user}
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
