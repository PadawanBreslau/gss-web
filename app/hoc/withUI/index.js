import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { hideUiMessage } from 'redux/UI/actions';
import makeSelectUi from 'redux/UI/selectors';
import uiReducer from 'redux/UI/reducer';
import makeSelectUser from 'redux/user/selectors';
import userReducer from 'redux/user/reducer';

export default function withUi() {
  return (PageComponent) => {
    class UiHOC extends React.PureComponent {
      componentWillMount() {
        this.props.onClearMessage();
      }

      render() {
        return <PageComponent {...this.props} />;
      }
    }
    UiHOC.propTypes = {
      onClearMessage: PropTypes.func.isRequired,
    };
    function mapDispatchToProps(dispatch) {
      return {
        onClearMessage: () => {
          dispatch(hideUiMessage());
        },
      };
    }
    const mapStateToProps = createStructuredSelector({
      ui: makeSelectUi(),
      user: makeSelectUser(),
    });
    const withConnect = connect(
      mapStateToProps,
      mapDispatchToProps,
    );
    const withUIReducer = injectReducer({ key: 'ui', reducer: uiReducer });
    const withUserReducer = injectReducer({
      key: 'user',
      reducer: userReducer,
    });
    const ComposedUiHOC = compose(
      withUIReducer,
      withUserReducer,
      withConnect,
    )(UiHOC);

    return ComposedUiHOC;
  };
}
