import React from "react";
import { Paper, Grid, List, Typography } from "@material-ui/core";
import userService from "../../utils/userService";

class SideBar extends React.Component {
  render() {
    const styles = {
      name: {
        marginBottom: 80
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
      </Paper>
    );
  }
}

export default SideBar;
