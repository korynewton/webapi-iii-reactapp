import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import Posts from './components/Posts'
import Users from './components/Users'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        users : [],
        error: ''
    }
}

  componentDidMount() {
    axios.get('https://ls-heroku-deploy.herokuapp.com/users')
        .then(res => {
            this.setState({ users : res.data})
        })
        .catch(err => {
          this.setState({error: err})
        })
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <Users {...props} users={this.state.users}/>}/>
        <Route path='/users/:id'  render={props => <Posts {...props} />} />          
      </div>
    );
  }
}

const appWithRouter = withRouter(App)

export default appWithRouter;
