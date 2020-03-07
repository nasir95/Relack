import React, { Fragment } from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../components/Nav/Nav";
import { Grid, Paper } from "@material-ui/core";
import SideBar from "../../components/SideBar/SideBar";
import RightPane from "../../components/RightPane/RightPane";

class Dashboard extends React.Component {
  render() {
    const styles = {
      left: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 670,
        overflowY: "auto"
      },
      right: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 670,
        whiteSpace: "nowrap",
        overflowY: "auto"
      },
      stylesName: {
        marginBottom: 80
      },
      stylesBtn: {
        margin: 1000
      }
    };
    return (
      <>
        <Navbar />
        <Grid container spacing={1}>
          <Grid item md={2}>
            <SideBar styles={styles} {...this.props} />
          </Grid>
          <Grid item md={8}>
            <RightPane styles={styles} {...this.props} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Dashboard;
