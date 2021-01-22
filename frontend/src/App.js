import React from 'react';
import './App.css';
import Test from './component/Test'
import Timer from './component/Timer'
import JSTimer from './component/JSTimer'

class App extends React.Component {
  render(){
    return(
      <header>
        <Test/>
        <Timer/>
        <JSTimer/>
      </header>
    )
  }
}


export default App;
