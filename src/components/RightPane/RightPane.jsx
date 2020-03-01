import React from "react";

import { Paper } from "@material-ui/core";

class RightPane extends React.Component {
  render() {
    return <Paper style={this.props.styles.right}>Right Pane</Paper>;
  }
}

export default RightPane;
