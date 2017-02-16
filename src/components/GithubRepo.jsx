import React from 'react';


class GithubRepo extends React.Component {

  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <div>
            <a href={this.props.user.html_url} target="_blank">{this.props.user.full_name}</a>
          </div>
      );
  }
};

export default GithubRepo;
