import React, { Component } from 'react';
import './App.css';
import Index from './components/index.jsx'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Index}/>
          {/* <Route exact path='/details/:id' component={Details}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
