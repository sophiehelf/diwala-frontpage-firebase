import * as React from 'react';

class NoMatch extends React.Component {
  render() {
    return <div>No component available for <code>{this.props.location.pathname}</code></div>;
  }
}

export default NoMatch;
