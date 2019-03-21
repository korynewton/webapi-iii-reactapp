import React, { Component } from 'react'
import User from './User';

import Loader from 'react-loader-spinner';

export default class Users extends Component {

  render() {
    console.log(this.props.users)
    return (
      <>
            <h1>Users</h1>
            {this.props.users.length === 0 && (
              <Loader type="Bars" color="#00BFFF" height="190" width="160" />
            )}
            {this.props.users.map( user => <User user={user} key={user.id} />
            )}
      </>
    )
  }
}

