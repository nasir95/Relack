import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  Paper,
  ListItem,
  makeStyles,
  TextField,
  Divider
} from "@material-ui/core";
import channelsService from "../../utils/channelsService";
import styles from "./RightPane.module.css";
import userService from "../../utils/userService";

class RightPane extends React.Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      content: "",
      postedBy: userService.getUser()
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

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Paper style={this.props.styles.right}>
            <Form.Group onSubmit={this.handleSubmit}>
              <Form.Label htmlFor="content"></Form.Label>
              <Form.Control
                className={styles.input}
                required
                fullWidth
                id="content"
                label="Message"
                style={{ margin: 8 }}
                placeholder="Enter A Message"
                margin="normal"
                name="content"
                multiline
                variant="outlined"
                onChange={this.handleChange}
                value={this.state.content}
              />
              {/* <Button disabled={!this.isFormValid()} type="submit">
                Add Message
              </Button> */}
              {this.props.cont.map((m, idx) => (
                <ListItem button key={idx}>
                  {`${this.state.postedBy.firstName}  ${this.state.postedBy.lastName}: 
                  ${m.content}`}
                </ListItem>
              ))}
            </Form.Group>
          </Paper>
        </Form>
      </>
    );
  }
}

export default RightPane;
