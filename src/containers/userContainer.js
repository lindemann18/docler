import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { toastr } from 'react-redux-toastr';
import { updateUser } from '../actions';
import { EMPTY_USER } from '../const';

class userNameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount = () => {
    const { userName } = this.props;
    this.setState({
      userName,
    });
  };

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { userName } = this.state;
    e.preventDefault();
    if (userName.length > 0) {
      this.props.updateUser(userName);
    } else {
      toastr.error('Attention', EMPTY_USER);
    }
  };

  render() {
    const { userName } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ControlLabel>User Name:</ControlLabel>
          <input
            type="text"
            placeholder="write an existing user"
            value={userName}
            className="form-control"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userName } = state.chat;
  return {
    userName,
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(userNameContainer);
