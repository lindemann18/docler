import React from 'react';
import Title from './TitleComponent';
import MessageList from '../containers/messageListContainer';
import SendMessageForm from '../containers/sendMessageFormContainer';
import '../styles/chat.scss';

function Chat({ messages, roomId }) {
  return (
    <div className={`chat`}>
      <Title />
      <MessageList />
      <SendMessageForm />
    </div>
  );
}

export default Chat;
