import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

class Anchor extends React.Component {
  static propTypes = {
    target: PropTypes.any.isRequired,
  };

  render() {
    const { as: Tag = 'span', className } = this.props;

    return (
      <Tag className={cn('anchor', className)}>
        {this.props.children}

        <a href={`#${this.props.target}`} aria-hidden>
          <span aria-hidden>#</span>
        </a>
      </Tag>
    );
  }
}

export default Anchor;