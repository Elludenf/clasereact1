import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div> 
        <Header title="Patricio Perez" />
        Hola Mundo 
        <Footer copyright="Copyright 2017-PUCE"/>
      </div>
    );
  }
}

export default App;
