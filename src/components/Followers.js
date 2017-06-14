import React, {PropTypes} from 'react';
import GithubUser from './GithubUser.js';
import {fetchFollowers} from '../api';

class Followers extends React.Component {

  state = {
    followers: []
  }

  componentDidMount() {
    fetchFollowers(this.props.params.username).then((data) => {
      console.log(data);
      this.setState({followers: data});
    })
  }

  render() {
    if (!this.state.followers) {
      return <div>LOADING...</div>
    }

    return (
      <div className="followers-page">
        <h3>Followers of {this.props.params.username}</h3>
        <ul>
          {this.state.followers.map(function(follower) {
            // console.log(follower);
            return <GithubUser user={follower}/>
          })}
        </ul>
      </div>
    )
  }
}

export default Followers;
