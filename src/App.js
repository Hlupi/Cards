import React, { Component } from 'react';
import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';
import Background from './components/styles/Background';

const GlobalStyle = createGlobalStyle`
html {
  background: #59503b;
}
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Background />
        <Card />
      </>
    );
  }
}

export default App;
