import React from 'react';

import GithubUser from './GithubUser';


class Followers extends React.Component {

  constructor() {
      super();
      this.state = {};
  }

  componentDidMount() {
      fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  followers: data
              });
          }.bind(this)
      );
  }

  render() {

    if (!this.state.followers) {
        return (<div className="followers-page">LOADING...</div>);
    }

    return (
      <div className="followers-page">

        <h2>Followers of {this.props.params.username}</h2>
        <ul>
          {this.state.followers.map(function(item){
            return <GithubUser user={item.login} avatar={item.avatar_url}/>
          })}
        </ul>
      </div>
    );
  }
};

export default Followers;
