import React, {PropTypes} from 'react';
import GithubRepo from './GithubRepo.js';
import {fetchRepos} from '../api';

class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetchRepos(this.props.params.username).then((data) => {
      console.log(data);
      this.setState({repos: data});
    })
  }

  render() {
    if (!this.state.repos) {
      return <div>LOADING...</div>
    }
    return (
      <div className="following-page">
        <h3>{this.props.params.username} + {'s repos'}</h3>
        <ul>
          {this.state.repos.map(function(repo) {
            return <GithubRepo repo={repo}/>
          })}
        </ul>
      </div>

    )
  }
}

export default Repos;
