import React from 'react';
import {Link} from 'react-router';


class GithubUser extends React.Component {

  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (

        <Link to={"/user/" + this.props.user}>
          <img className="user-info__avatar" src={this.props.avatar}/>
          <span className="user-info__text">{this.props.user}</span>
        </Link>
      
      );
  }
};

export default GithubUser;
