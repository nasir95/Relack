import React from "react";
import {
  Paper,
  Grid,
  List,
  Typography,
  Fab,
  makeStyles,
  ListItem,
  ListItemText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import userService from "../../utils/userService";
import ChannelButton from "../Buttons/channelButton";
import channelsService from "../../utils/channelsService";

class SideBar extends React.Component {
  state = {
    chanName: []
  };

  async componentDidMount() {
    const channels = await channelsService.index();
    this.setState({
      chanName: channels
    });
  }

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
              {`${userService.getUser().firstName}  ${
                userService.getUser().lastName
              }`}
            </Paper>
          </Grid>

          <Typography variant="ul">Channels</Typography>
          <div>
            <List>
              {this.state.chanName.map((channel, idx) => (
                <ListItem button>{channel.channelName}</ListItem>
              ))}
            </List>
          </div>
        </Paper>
        <ChannelButton {...this.props} />
      </>
    );
  }
}

export default SideBar;
