import {
  INSTANCE_LOCATOR,
  TEXT_TOKEN_ENDPOINT,
  CHAT_ID,
  INITIALIZE_CHAT_MANAGER,
  GET_MESSAGES,
  SEND_MESSAGE,
  CHANGE_USER,
} from '../const';
const initialState = {
  messages: [],
  chatManager: {},
  currentUser: {},
  userName: 'chuvakovich',
};

function Chat(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CHAT_MANAGER:
      const { userName } = state;
      const chatManager = new Chatkit.ChatManager({
        instanceLocator: INSTANCE_LOCATOR,
        userId: userName,
        tokenProvider: new Chatkit.TokenProvider({
          url: TEXT_TOKEN_ENDPOINT,
        }),
      });
      return { ...state, chatManager };

    case GET_MESSAGES:
      const { messages, currentUser } = action.payload;
      return {
        ...state,
        messages,
        currentUser,
      };

    case SEND_MESSAGE:
      console.log(action);
      return state;

    case CHANGE_USER:
      const newUserName = action.payload.newUserName;
      return {
        ...state,
        userName: newUserName,
      };

    default:
      return state;
  }
}

export default Chat;
