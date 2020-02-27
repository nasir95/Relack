import React, { Component } from "react";
import styles from "./Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import LoginButton from "../../components/Buttons/loginButton";
import SignupButton from "../../components/Buttons/signupButton";
import Navbar from "../../components/Nav/Nav";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className={styles.left}>
            {<Navbar />}
            <div className={styles.points}>
              <h3
                className={styles.join}
                href="https://www.flaticon.com/authors/freepik"
              >
                Join a community.
              </h3>
              <h3 className={styles.express}>Express your opinions.</h3>
              <h3 className={styles.fun}>Have fun arguing.</h3>
            </div>
          </Col>
          <Col className={styles.right}>
            <div className={styles.btn}>
              <h2> Do you want to know what people are saying?</h2>
              <p className={styles.para}>Find your channel!</p>
              <div className={styles.logBtn}>
                <LoginButton />
              </div>
              <div className={styles.signBtn}>
                <SignupButton />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
