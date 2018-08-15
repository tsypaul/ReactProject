import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/members/members';
import AddMember from './components/members/AddMember';

class App extends Component {

  constructor(){
    super();
    this.state={
      members:[],
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    fetch('./home')
    .then(res => res.json())
    .then(members => this.setState({members}, () => console.log('Member fetched!', members)));
  }

  handleAddMember(member){
    console.log(member);
    fetch('/add', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(member)
    })

    this.fetchData();
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Members getMember={this.state.members}/>
        <AddMember addMember={this.handleAddMember.bind(this)} />
      </div>
    );
  }
}

export default App;
