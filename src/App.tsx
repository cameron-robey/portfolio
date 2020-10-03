import React from 'react';

// Components
import Info from './components/Info';
import Portfolio from './components/Portfolio';

// Import global styles
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
  return <>
    <GlobalStyle />
    <Info />
    <Portfolio />
  </>;
}

export default App;
