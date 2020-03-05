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

class SideBar extends Component {
  render() {
    const styles = {
      name: {
        marginBottom: 80
      },
      addBtn: {
        margin: 1000
      }
    };

    return (
      <>
        <Paper style={this.props.styles.left}>
          <Grid>
            <Paper style={styles.name}>
              {`${this.props.user.firstName}  ${this.props.user.lastName}`}
            </Paper>
          </Grid>
          <Typography>Channels</Typography>

          <Switch>
            <Route
              exact
              path="/dashboard"
              render={() => (
                <div>
                  <List>
                    {this.props.channels.map((channel, idx) => (
                      <Link key={idx}>
                        <ListItem button key={idx}>
                          {channel.channelName}
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </div>
              )}
            />
          </Switch>
        </Paper>
        <ChannelButton {...this.props} />
      </>
    );
  }
}

export default SideBar;
