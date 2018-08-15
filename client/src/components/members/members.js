import React, { Component } from 'react';
import './members.css';

class members extends Component {

    render() {
        return (
            <div>
                <h2>hello</h2>
                <ul>
                    {this.props.getMember.map(member =>
                        <li key={member.id}>{member.firstName} {member.lastName}</li>)}
                </ul>
            </div>
        );
    }
}

export default members;
