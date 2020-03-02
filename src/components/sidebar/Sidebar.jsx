import React from "react";
import { Paper, Grid, List, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import userService from "../../utils/userService";
import ChannelButton from "../Buttons/channelButton";

class SideBar extends React.Component {
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
      <Paper style={this.props.styles.left}>
        <Grid>
          <Paper style={styles.name}>
            {`${userService.getUser().firstName}  ${
              userService.getUser().lastName
            }`}
          </Paper>
        </Grid>

        <Typography variant="ul">Channels</Typography>
        <Fab size="small" color="primary" aria-label="add">
          <div className={styles.addBtn}>
            <AddIcon />
          </div>
        </Fab>
        <ChannelButton {...this.props} />
      </Paper>
    );
  }
}

export default SideBar;
