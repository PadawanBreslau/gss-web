import React from 'react';
import PropTypes from 'prop-types';
import SubsectionComponent from 'components/SubsectionComponent';
import { withApiRead } from 'hoc/withApi';

@withApiRead({
  storeName: 'Subsection',
  api: {
    get: '/subsections/:subsectionId',
  },
})
export default class SubsectionContainer extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (data === []) return null;

    console.log(data);
    return <SubsectionComponent data={data} />;
  }
}
SubsectionContainer.propTypes = {
  data: PropTypes.array,
};
