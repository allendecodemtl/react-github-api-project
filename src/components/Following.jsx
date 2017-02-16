import React from 'react';

import GithubUser from './GithubUser';


class Following extends React.Component {

  constructor() {
      super();
      this.state = {};
  }

  componentDidMount() {
      fetch(`https://api.github.com/users/${this.props.params.username}/following`)
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  followed: data
              });
          }.bind(this)
      );
  }

  render() {

    if (!this.state.followed) {
        return (<div className="followed-page">LOADING...</div>);
    }

    return (
      <div className="followed-page">

        <h2>Followed by {this.props.params.username}</h2>
        <ul>
          {this.state.followed.map(function(item){
            return <GithubUser user={item.login} avatar={item.avatar_url}/>
          })}
        </ul>
      </div>
    );
  }
};

export default Following;
