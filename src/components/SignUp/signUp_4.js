import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import Header from './signUp_header';
import './signUp.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_4 extends Component {

  state = {}

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    this.props.history.push('/signup3');
  }

  handleClickNext = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 2) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup5');

    }

  }

  render() {
    return (
      <>
        <Header width={'80%'} /><br />
          <center><h2>Personal Information Continued</h2></center><br />
          <div className="signup-questions"><br />
          <span className="survey-questions">7. Age(s) you coach and want to focus on with during the Challenge:</span><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="1" />6-10 years old<br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="2" />11-13 years old<br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="3" />14-18 years old<br />
          <br />
          <span className="survey-questions">8. How did you find us?</span><br />
            <label>Choose One</label><br />
          <select className="semantic-radio" onChange={this.handleChange('how_did_you_find_us')} >
            <option>--Choose One--</option>
            <option value="Girls on the Run">Girls on the Run</option>
            <option value="Wayzata Girls Basketball Association">Wayzata Girls Basketball Association</option>
            <option value="The Loppet Foundation">The Loppet Foundation</option>
            <option value="Fusion Soccer Club MN">Fusion Soccer Club MN</option>
            <option value="Tia Russell Dance Studio">Tia Russell Dance Studio</option>
            <option value="Internet search">Internet search</option>
            <option value="Referral">Referral</option>
          </select><br />
          <label>Or fill in the blank:</label><br />
          <textarea className="semantic-radio" onChange={this.handleChange('how_did_you_find_us')} value={this.state.value} rows="4" cols="50"></textarea>
          <br /><br />
        </div>
        <br />
        <div className="bottomDiv">
          <Button onClick={this.handleClickBack}>Back</Button>
          <Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_4);
