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
      channels: [],
      cont: []
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleUpdateChannels = async () => {
    const channels = await channelsService.index();
    this.setState({ channels: channels });
    // console.log(channels);
  };

  handleLogout = () => {
    userService.logout();

    this.setState({ user: null, channels: [] });
  };

  handleUpdateMessages = async idx => {
    const messages = await channelsService.indexMessage(idx);
    this.setState({ cont: messages.messages });
    console.log(messages);
  };

  async componentDidMount() {
    await this.handleUpdateChannels();
    await this.handleUpdateMessages();
  }

  async componentWillUnmount() {
    this.handleUpdateMessages();
  }

  render() {
    return (
      <div className="App-outer-container">
        <div></div>
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
              path="/dashboard/:id"
              render={props => (
                <Dashboard
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  handleUpdateChannels={this.handleUpdateChannels}
                  handleUpdateMessages={this.handleUpdateMessages}
                  handleLogout={this.handleLogout}
                  channels={this.state.channels}
                  user={this.state.user}
                  cont={this.state.cont}
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
