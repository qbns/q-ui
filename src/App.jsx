import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import style from './App.scss';

const App = ({ t }) => (<div className={style.stolec}><h1>{ t('appTitle') }</h1></div>);

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(App);
