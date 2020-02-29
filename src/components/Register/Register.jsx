import React, { Component } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import userService from "../../utils/userService";

class SignupForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: ""
    };
  }

  isFormValid = () => {
    return (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.password === this.state.passwordConf
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { firstName, lastName, email, password } = this.state;
      await userService.signup({ firstName, lastName, email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push("/dashboard");
      });
    } catch (error) {}
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                id="firstName"
                name="firstName"
                type="name"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                id="lastName"
                name="lastName"
                type="name"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="passwordConf">Password Confirmation</Form.Label>
          <Form.Control
            id="passwordConf"
            name="passwordConf"
            type="password"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
            value={this.state.passwordConf}
          />
        </Form.Group>
        <Modal.Footer>
          <Button
            disabled={!this.isFormValid()}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Modal.Footer>
      </Form>
    );
  }
}

export default SignupForm;
