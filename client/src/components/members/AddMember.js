import React, { Component } from 'react';

class AddMember extends Component {

    constructor(){
        super();
        this.state = {
            newMember: {}
        }
    }



    static defaultProps = {
        members: ['Paul', 'Kris', 'Nick']
    }

    handleSubmit(e){
        if(this.refs.firstName.value === '' || this.refs.lastName.value === ''){
            alert('names are required');
        }else{
            this.setState({newMember:{
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value
            }}, function(){
                this.props.addMember(this.state.newMember);
            })
        }

        e.preventDefault();
    }

    render() {
        let memberOptions = this.props.members.map(member => {
            return <option key={member} value="member">{member}</option>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>First Name</label> <br/>
                        <input type="text" ref="firstName" placeholder="Enter first name" /><br/>
                        <label>Last Name</label> <br/>
                        <input type="text" ref="lastName" placeholder="Enter last name" />
                    </div>
                    <div>
                        <label>member</label> <br/>
                        <select ref="member">
                            {memberOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddMember;
