import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { sendMessage } from '../actions';

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const { message } = this.state;
    e.preventDefault();
    this.setState({
      message: '',
    });
    this.props.sendMessage(message);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
          className="form-control"
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { chatManager, messages } = state.chat;
  return {
    chatManager,
    messages,
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => {
    dispatch(sendMessage(message));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendMessageForm);
