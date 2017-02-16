import React from 'react';

import GithubRepo from './GithubRepo';


class Repos extends React.Component {

  constructor() {
      super();
      this.state = {};
  }

  componentDidMount() {
      fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
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

        <h2>{this.props.params.username}'s repos</h2>
        <ul>
          {this.state.followed.map(function(item){
            return <GithubRepo user={item}/>
          })}
        </ul>
      </div>
    );
  }
};

export default Repos;
