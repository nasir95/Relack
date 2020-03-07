import React from "react";
import { Form, Button } from "react-bootstrap";
import { Paper, ListItem } from "@material-ui/core";
import channelsService from "../../utils/channelsService";

class RightPane extends React.Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      content: "",
      postedBy: this.props.user
    };
  }

  isFormValid = () => {
    return this.state.content;
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
      const { content, postedBy } = this.state;
      await channelsService.createMessage(
        { content, postedBy },
        this.props.match.params.id
      );
      this.setState(this.getInitialState(), () => {
        this.props.handleUpdateMessages(this.props.match.params.id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.props.handleUpdateMessages(this.props.match.params.id);
  };

  render() {
    return (
      <>
        <Form>
          <Paper style={this.props.styles.right}>
            <Form.Group>
              <Form.Label htmlFor="content"></Form.Label>
              <Form.Control
                id="content"
                name="content"
                type="content"
                placeholder="Enter Message"
                onChange={this.handleChange}
                value={this.content}
              />
              <Button
                disabled={!this.isFormValid()}
                onClick={this.handleSubmit}
                type="submit"
              >
                Add Message
              </Button>
              {this.props.cont.map((m, idx) => (
                <ListItem key={idx}>{m.content}</ListItem>
              ))}
            </Form.Group>
          </Paper>
        </Form>
      </>
    );
  }
}

export default RightPane;
