import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class GithubUser extends React.Component {

  render() {
    return (

      <Link style={{
        verticalAlign: 'baseline',
        outline: 'none',
        display: 'flex',
        marginBottom: 20,
        textDecoration: 'none',
        color: 'black'
      }} to={"/user/" + this.props.user.login}>
        <img style={{
          borderRadius: 500,
          height: 50,
          width: 50,
          marginRight: 14
        }} src={this.props.user.avatar_url}/>
        <p>{this.props.user.login}</p>
      </Link>

    )
  }
}

export default GithubUser;
