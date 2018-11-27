import React, { Component } from 'react';
import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';
import Background from './components/styles/Background';
import OpenSansBold from './assets/fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from './assets/fonts/OpenSans-ExtraBold.ttf';
import OpenSansLight from './assets/fonts/OpenSans-Light.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Open Sans Light';
  src: url(${OpenSansLight});
}
@font-face {
  font-family: 'Open Sans Bold';
  src: url(${OpenSansBold});
}
@font-face {
  font-family: 'Open Sans Extra Bold';
  src: url(${OpenSansExtraBold});
}

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
