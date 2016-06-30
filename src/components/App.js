// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

const App = ({ loading, children }) => (
  <div className="container-fluid">
    <Header loading={loading} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return { loading: state.ajaxCallsInProgress > 0 };
}

export default connect(mapStateToProps)(App);
