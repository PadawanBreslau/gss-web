import React from 'react';
import PropTypes from 'prop-types';
import withApiWrite from 'hoc/withApi/Write';
import withApiRead from 'hoc/withApi/Read';

export default (hocOptions) => (PageComponent) => {
  @withApiWrite(hocOptions)
  @withApiRead(hocOptions)
  class ReadWriteHOC extends React.PureComponent {
    componentDidUpdate(prevProps) {
      if (!prevProps.initialized && this.props.initialized) {
        this.initializeFormData(this.props);
      }
    }

    initializeFormData = (props) => {
      const { dispatch, data, initialize } = props;
      const { fields } = hocOptions;
      const adaptedData = {};
      Object.keys(fields).forEach((key) => {
        adaptedData[key] = data[key];
      });
      dispatch(initialize(adaptedData));
    };

    render() {
      const { data, handleSubmit } = this.props;

      return <PageComponent {...this.props} handleSubmit={handleSubmit} data={data} />;
    }
  }
  ReadWriteHOC.propTypes = {
    data: PropTypes.array,
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    dispatch: PropTypes.func,
    initialized: PropTypes.bool,
  };
  return ReadWriteHOC;
};
