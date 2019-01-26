import React from 'react';
import '../styles/message.scss';

function Message({ senderId, text, messageDate }) {
  return (
    <li className="message">
      <div className="message__user">{senderId}</div>
      <div className="message__text">{text}</div>
      <div className="message__time">{messageDate} </div>
    </li>
  );
}

export default Message;
