import React, { Component } from "react";
import { connect } from 'react-redux';

//semantic-ui
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { thisExpression } from "@babel/types";

class UserPreferences extends Component {
  state = {
    choose_receive: this.props.reduxState.user.S1_choose_receive,
    email: this.props.reduxState.user.email,
    enabled: false
  };
  
  handleChangeFor = propertyName => event => {
    console.log(this.state);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };

  handleSubmit = () => {
    console.log('submit button clicked');
      //dispatch to saga
    this.props.dispatch({
      type: "UPDATE_USER_PREFERENCES",
      payload: this.state
    });
  }

  handleDelete = () => {
    console.log('delete button clicked');
  }

  handleEnable = () => {
    this.setState({
      ...this.state,
      enabled: !this.state.enabled
    })
  }
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        <center>
          <h1>Update Preferences</h1>
          {this.state.enabled ? (
            <Input
              onChange={this.handleChangeFor("email")}
              label="Email"
              placeholder={this.state.email}
              value={this.state.email}
            />
          ) : (
            <div>
              <Button onClick={this.handleEnable}>
                Click to change email
              </Button>
              <Input
                disabled
                onChange={this.handleChangeFor("email")}
                label="Email"
                placeholder={this.state.email}
                value={this.state.email}
              />
            </div>
          )}
          <br />
          <br />
          <label>Update how you want to receive the Challenges:</label>
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            className="question"
            type="radio"
            name="receive"
            value="email"
          />
          Email
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="text"
          />
          Text
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="both"
          />
          Both
          <br />
          <br />
          <br />
          <Button onClick={this.handleSubmit}>Save Changes</Button>
          <br />
          <br />
          <Button onClick={this.handleDelete}>Delete My Account</Button>
        </center>
        {/* <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(UserPreferences);