import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Test from './component/Test'
import Timer from './component/Timer'
import JSTimer from './component/JSTimer'
import Name from './component/name'
import Navbar from './component/navbar'
import GetDbUser from './component/GetDbUser'
import function_display from './component/function_display'

class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <Route exact path="/" component={Test} />
        <Route path="/Test" component={Test} />
        <Route path="/Timer" component={Timer} />
        <Route path="/JSTimer" component={JSTimer} />
        <Route path="/Name" component={Name} />
        <Route path="/GetDbUser" component={GetDbUser} />
        <Route path="/function_display" component={function_display} />
      </div>

      // <div>
      //   <Test/>
      //   <Name/>
      //   <Timer/>
      //   <JSTimer/>
      // </div>
    )
  }
}


export default App;
