import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const App = ({ t }) => (<h1>{ t('hello') }</h1>);

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(App);
