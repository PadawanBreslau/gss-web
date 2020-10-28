import React from 'react';
import PropTypes from 'prop-types';
import { withApiRead } from 'hoc/withApi';

@withApiRead({
  storeName: 'Sections',
  api: {
    get: '/sections',
  },
})
export default class SectionsContainer extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (!data.type) return null;

    return <h1>We have a data</h1>;
  }
}
SectionsContainer.propTypes = {
  data: PropTypes.array,
};
