import React from 'react';

class Tree extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Tree;
