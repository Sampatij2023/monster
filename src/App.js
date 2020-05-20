import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from 'react-dom';
import { CardList } from './components/card-list/card-list.component';

import {SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(users=>this.setState({monsters:users}))
}



  render(){

    const {monsters, searchField}=this.state;
    const filteredMonsters =monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (

     <div className="App">
     <h1>Monsters Rolodex</h1>
     <SearchBox
       placeholder='search monster' 
       handleChange={e => {
      this.setState({ searchField: e.target.value})}}/>
       <CardList monsters={filteredMonsters} />
    
  
     </div>
     /* </CardList> */
     
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Deepak Suthar</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
   
  );
}}

export default App;
