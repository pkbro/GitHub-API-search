import React, {PropTypes} from 'react';
import {fetchFollowing} from '../api';
import GithubUser from './GithubUser.js';

class Following extends React.Component {
  state = {
    following: []
  }

  componentDidMount() {
    fetchFollowing(this.props.params.username).then((data) => {
      console.log(data);
      this.setState({following: data});
    })
  }

  render() {
    if (!this.state.following) {
      return <div>LOADING...</div>
    }

    return (
      <div className="following-page">
        <h3>Followed by {this.props.params.username}</h3>
        <ul>
          {this.state.following.map(function(following) {
            // console.log(follower);
            return <GithubUser user={following}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Following;
