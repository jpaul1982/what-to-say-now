import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react';

const name = {
  fontSize: '50px'
}

const welcomeDiv = {
  marginTop: '20px'
}

const matter = {
  backgroundColor: '#35297f',
  color: 'white',
  margin: '0',
}

const dropDownDiv = {
  backgroundColor: '#faf0e8'
}

const goodLuck = {
  color: '#35297f'
}

const quote = {
  color: '#ff6624'
}


class ChallengeContent extends Component {

  state = {
    why_matters: false,
    reflection: false,
    action_steps: false,
  }


  componentDidMount() {
    this.props.dispatch({ type: 'GET_WEEKLY', payload: this.props.match.params })
  }

  handleDrop = (propertyName) => {
    this.setState({
      [propertyName]: !this.state[propertyName]
    })
  }
  

  render() {
    return (

      <center >
        <header style={name} className="sign-up-header">
          Hello {this.props.reduxState.user.first_name}<br />
          <div className="outerBar" style={this.outerBar}>
            <div className="innerBar" style={this.innerBar}></div>
          </div>
          <br />
        </header>
        <main>
          {this.props.reduxState.weeklyContentReducer.weeklyChallengeReducer.map((info, i) => {
            return (
              <div key={i}>
                <div style={welcomeDiv} className='welcomeDiv'>
                  <h2 className='welcomeWeek'>Welcome to Week
            <span className='weekNumber'> {info.week} </span>
                    of the "What to Say" Coaches Challenge!</h2>
                  <p>{info.intro}</p>
                  <h2>This week's "What to Say" phrase is : </h2>

                  <p> {info.phrase} </p>
                </div>
                <div className='dropDownDiv'>

                  {this.state.why_matters ?
                    <><h2 onClick={() => { this.handleDrop('why_matters') }} style={matter}>Why does this phrase matter? <Icon name='chevron right' /></h2>

                      <p style={dropDownDiv} >{info.why_matters}</p></>
                    :
                    <>
                      <h2 onClick={() => { this.handleDrop('why_matters') }} style={matter}>Why does this phrase matter? <Icon name='chevron down' /></h2>
                    </>}
                  {this.state.reflection ?
                    <>
                      <h2 onClick={() => { this.handleDrop('reflection') }} style={matter}>For your own reflection <Icon name='chevron right' /></h2>
                      <p style={dropDownDiv} >{info.reflection}</p>
                    </>
                    :
                    <>
                      <h2 onClick={() => { this.handleDrop('reflection') }} style={matter}>For your own reflection <Icon name='chevron down' /></h2>
                    </>}
                  {this.state.action_steps ?
                    <>
                      <h2 onClick={() => { this.handleDrop('action_steps') }} style={matter}>Action steps options <Icon name='chevron right' /></h2>
                      <pre style={dropDownDiv} >{info.action_steps}</pre>
                    </>
                    :
                    <>
                      <h2 onClick={() => { this.handleDrop('action_steps') }} style={matter}>Action steps options <Icon name='chevron down' /></h2>
                    </>}
                </div>
                <div className="postDiv">
                  <h2 style={goodLuck} >Good luck with this challenge!  Email any questions or suggestions to us</h2>
                  <h2 style={quote}>"A good coach can change a game.  A great coach can change a life."
                    -John Wooden
            </h2>
                </div>
              </div>
            )
          })}

        </main>
      </center>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(ChallengeContent);
