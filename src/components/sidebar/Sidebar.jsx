import React, { Component } from "react";
import {
  Paper,
  Grid,
  List,
  ListItem,
  IconButton,
  Typography
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Route, Switch, Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import ChannelButton from "../Buttons/channelButton";

class SideBar extends Component {
  render() {
    return (
      <>
        <Paper style={this.props.styles.left}>
          <Grid>
            <Paper style={this.props.styles.stylesName}>
              {`${this.props.user.firstName}  ${this.props.user.lastName}`}
              <IconButton>
                <Link to="" onClick={this.props.handleLogout}>
                  <ExitToAppIcon />
                </Link>
              </IconButton>
            </Paper>
          </Grid>
          <Typography>
            channels <ChannelButton {...this.props} />
          </Typography>

          <List>
            {this.props.channels.map((channel, idx) => (
              <Link
                className={styles.link}
                key={idx}
                to={`/dashboard/${channel._id}`}
              >
                <ListItem button key={idx}>
                  {channel.channelName.toLowerCase()}
                </ListItem>
              </Link>
            ))}
          </List>
        </Paper>
      </>
    );
  }
}

export default SideBar;
