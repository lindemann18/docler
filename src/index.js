import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import reducer from './reducers/index';
const store = createStore(reducer, applyMiddleware(thunk));

const Index = () => {
  return (
    <Provider store={store}>
      <div>
        <App />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={true}
          position="top-right"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar={false}
          closeOnToastrClick={false}
        />
      </div>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
