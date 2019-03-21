import React from 'react';
import { NavLink } from 'react-router-dom';

const User = props => {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <NavLink to={`/users/${props.user.id}`} ><button>View Posts</button></NavLink> 
            <button>Delete User</button>
        </div>
    )
}

export default User