import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  renderMessages = () => {
    const { messages } = this.props;

    return messages.map((message) => {
      let messageDate = new Date(message.createdAt)
        .toLocaleTimeString()
        .toString();

      return (
        <Message
          key={message.id}
          senderId={message.senderId}
          messageDate={messageDate}
          text={message.text}
        />
      );
    });
  };

  render() {
    const { messages } = this.props;
    return (
      <div>
        <ul>{messages.length > 0 && this.renderMessages()}</ul>
      </div>
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
  getMessages: () => {
    dispatch(getMessages());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageList);
