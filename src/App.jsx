import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Container from './components/Container';

const App = ({ t, children }) => (
  <Container>
    <div>
      <h1>{ t('appTitle') }</h1>
    </div>
    { children }
  </Container>

);

App.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default translate()(App);
