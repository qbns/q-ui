import React from 'react';
import PropTypes from 'prop-types';

const Container = props => (<div className="uk-container">{props.children}</div>);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;
