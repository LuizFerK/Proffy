import React from 'react';

import Routes from './routes';

import GlobalStyles from './assets/styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
};

export default App;
