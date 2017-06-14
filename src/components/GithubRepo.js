import React, {PropTypes} from 'react';
import Star from 'react-icons/lib/ti/star';



class GithubRepo extends React.Component {
  render() {
    return (

      <a style={{
        verticalAlign: 'baseline',
        outline: 'none',
        display: 'flex',
        marginBottom: "20px",
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: "center"
      }} href={`${this.props.repo.html_url}`} target="_blank">
        <p style={{marginRight: "20px"}}>{this.props.repo.name}</p>
        <div style={{
          border: "thin solid black",
          width: "40px",
          height: "20px",
          alignItems: "center",
          display: 'flex',
          justifyContent: "center",
          fontSize: "12px"
        }}>{this.props.repo.stargazers_count} <Star/>
        </div>
      </a>
    )
  }
}

export default GithubRepo;
