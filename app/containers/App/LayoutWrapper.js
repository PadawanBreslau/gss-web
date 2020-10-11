import React from 'react';
import PropTypes from 'prop-types';
import withNavigation from 'hoc/withNavigation';

@withNavigation()
class LayoutWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}
LayoutWrapper.propTypes = {
  children: PropTypes.node,
};
export default LayoutWrapper;
