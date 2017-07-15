import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Container from './components/Container';
import style from './App.scss';

const App = ({ t }) => (
  <Container>
    <div className={style.stolec}>
      <h1>{ t('appTitle') }</h1>
    </div>
  </Container>

);

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(App);
