import { toastr } from 'react-redux-toastr';
import {
  CHAT_ID,
  CHANGE_USER,
  GET_MESSAGES,
  INITIALIZE_CHAT_MANAGER,
  WRONG_USER,
  UPDATED_USER,
} from '../const';
export const getMessages = () => (dispatch, getState) => {
  const state = getState();
  const { chatManager, messages } = state.chat;
  let stateMessages = [];
  chatManager.connect().then((currentUser) => {
    currentUser.subscribeToRoom({
      roomId: CHAT_ID,
      hooks: {
        onNewMessage: (message) => {
          stateMessages = [...stateMessages, message];
          dispatch({
            type: GET_MESSAGES,
            payload: {
              messages: stateMessages,
              currentUser,
            },
          });
        },
      },
    });
  });
};

export const sendMessage = (message) => (dispatch, getState) => {
  const { currentUser } = getState().chat;
  currentUser.sendMessage({
    text: message,
    roomId: CHAT_ID,
  });
};

export const updateUser = (user) => (dispatch, getState) => {
  const oldUserName = getState().chat.userName;
  if (user !== oldUserName) {
    dispatch({
      type: CHANGE_USER,
      payload: {
        newUserName: user,
      },
    });
    dispatch({
      type: INITIALIZE_CHAT_MANAGER,
    });
    dispatch(getMessages());
    toastr.success('Attention', UPDATED_USER);
  } else {
    toastr.error('Attention', WRONG_USER);
  }
};
