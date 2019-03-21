import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            posts : [],
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        axios.get(`https://ls-heroku-deploy.herokuapp.com/users/usersPosts/${this.state.id}`)
            .then(res => {
                this.setState({
                    posts : res.data
                })
            })
            .catch(err=> {
                console.log(err)
            })
    }

    render() {
        console.log(this.props.match.params)
        return (
            <>
                <h2>User Posts:</h2>
                {this.state.posts.map(post => {
                    return (
                        <h4>{post.text}</h4>
                    )
                })}
                <NavLink to='/'><button>Back to Users</button></NavLink>
            </>
        )
    }
}

export default Posts