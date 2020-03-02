import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import channelsService from "../../utils/channelsService";
import userService from "../../utils/userService";

class ChannelForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      channelName: "",
      description: "",
      createdBy: userService.getUser()
    };
  }

  isFormValid = () => {
    return this.state.channelName && this.state.description;
  };

  handleChange = e => {
    this.setState({
      error: "",
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { channelName, description, createdBy } = this.state;
      await channelsService.create({ channelName, description, createdBy });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.handleClose();
      });
    } catch (error) {}
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="channelName">Channel Name</Form.Label>
          <Form.Control
            id="channelName"
            name="channelName"
            type="name"
            placeholder="Channel Name"
            onChange={this.handleChange}
            value={this.channelName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            id="description"
            name="description"
            type="description"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.description}
          />
        </Form.Group>
        <Modal.Footer>
          <Button disabled={!this.isFormValid()} type="submit">
            Create Channel
          </Button>
        </Modal.Footer>
      </Form>
    );
  }
}

export default ChannelForm;
