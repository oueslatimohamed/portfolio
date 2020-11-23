import React from 'react';
import './App.css';
import Navbar from './Component/NavBar/Navbar';
import Home from './Component/Home/Home'

class App extends React.Component {
  render(){
    return (
      <div>
        <div><Navbar /></div>
        <div><Home /></div>
      </div>
      );
  }
}

export default App;
