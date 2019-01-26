import { connect } from 'react-redux';
import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Chat from './components/chat';
import Config from './components/config';
import { CHAT_ID } from './const';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'INITIALIZE_CHAT_MANAGER',
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: CHAT_ID,
    });
  }

  render() {
    return (
      <div className="app">
        <Grid>
          <Row className="show-grid">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Chat">
                <Col xs={12} md={8} className="conversation">
                  <Chat />
                </Col>
              </Tab>
              <Tab eventKey={2} title="Configs">
                <Col xs={12} md={8}>
                  <Config />
                </Col>
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(null)(App);
