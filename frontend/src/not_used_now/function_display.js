import React from 'react';
import { Switch, Route } from 'react-router-dom';
import func1 from '../component/func1'
import func2 from '../component/func2'

class function_display extends React.Component {
    render() {
      return (
        <div>
        {/* <h1>Function Display</h1> */}
        <Switch>
          {/* The component will show here if the current URL matches the path */}
          <Route path="/function_display/func1" component={func1} />
          <Route path="/function_display/func2" component={func2} />
        </Switch>
      </div>
      )
    }
}


export default function_display;