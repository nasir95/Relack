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
        overflowY: "auto",
        backgroundColor: "#383838",
        color: "white"
      },
      right: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 670,
        whiteSpace: "nowrap",
        overflowY: "auto",
        backgroundColor: "#383838",
        color: "white"
      },
      stylesName: {
        marginBottom: 80,
        backgroundColor: "#383838",
        color: "white"
      },
      stylesBtn: {
        margin: 1000
      },
      Dashboard: {
        backgroundColor: "#303030"
      }
    };
    return (
      <main style={styles.Dashboard}>
        <Navbar />
        <Grid container spacing={1}>
          <Grid item md={2}>
            <SideBar styles={styles} {...this.props} />
          </Grid>
          <Grid item md={8}>
            <RightPane styles={styles} {...this.props} />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Dashboard;
