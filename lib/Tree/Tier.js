import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import List from '../List';

const propTypes = {
  expanded: PropTypes.bool,
  contentData: PropTypes.array,
  chilren: PropTypes.element,
};

class Tier extends React.Component {
  constructor(props) {
    super(props);

    this.formatter = (item) => {
      let expanded = true;
      if(React.Children.count(this.props.children) === 1) {
        let child = React.Children.only(this.props.children);
        if (child) {
          const renderedChild = React.cloneElement(child, {expanded, ...child.props}, child.props.children);
          return (
            <li key={item.name}>
              {item.name}
              { expanded &&
                renderedChild
              }
            </li>
          );
        }
      }
    }
  }

  render() {
    const child = this.props.children;
    let expanded = true;
    return (
      <List items={this.props.contentData} itemFormatter={this.formatter}/>
    );
  }
}

export default Tier;