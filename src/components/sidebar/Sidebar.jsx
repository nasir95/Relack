import React, { Component } from "react";
import {
  Paper,
  Grid,
  List,
  Typography,
  ListItem,
  LinearProgress
} from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";

import ChannelButton from "../Buttons/channelButton";
import Dashboard from "../../pages/dashboard/Dashboard";

class SideBar extends Component {
  render() {
    return (
      <>
        <Paper style={this.props.styles.left}>
          <Grid>
            <Paper style={this.props.styles.stylesName}>
              {`${this.props.user.firstName}  ${this.props.user.lastName}`}
            </Paper>
          </Grid>
          <Typography>Channels</Typography>

          <List>
            {this.props.channels.map((channel, idx) => (
              <Link key={idx} to={`/dashboard/${channel._id}`}>
                <ListItem button key={idx}>
                  {channel.channelName}
                </ListItem>
              </Link>
            ))}
          </List>
          <Route path="/dashboard/:id" Component={Dashboard} />
        </Paper>
        <ChannelButton {...this.props} />
      </>
    );
  }
}

export default SideBar;
