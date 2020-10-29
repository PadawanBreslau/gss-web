import React from 'react';
import PropTypes from 'prop-types';
import SectionsComponent from 'components/SectionsComponent';
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
    if (data === []) return null;

    return <SectionsComponent data={data} />;
  }
}
SectionsContainer.propTypes = {
  data: PropTypes.array,
};
