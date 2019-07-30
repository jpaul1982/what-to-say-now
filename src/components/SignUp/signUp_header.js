import React, { Component } from 'react';

class signUp_header extends Component {
    outerBar = {
        backgroundColor: 'white',
        width: '300px',
        height: '30px',
        border: "1px solid black",
        borderRadius: '10px',
    }

    innerBar = {
        backgroundColor: "green",
        width: this.props.width,
        height: '30px',
        overflow: 'hidden',
        float: 'left',
        borderRadius: '10px',
    }

    render() {
        return (
            <header className="header">
                Thank you for participating in WithAll's "What To Say" Coaches Challenge.
                Please fill out the following form to participate.
                <div className="outerBar" style={this.outerBar}>
                    <div className="innerBar" style={this.innerBar}></div>
                </div>
            </header>
        );
    }
}

export default signUp_header;
