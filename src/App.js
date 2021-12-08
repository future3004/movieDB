import React from 'react';
// components
import Header from './components/Header';
import Home from './components/Home';

// styles
import { GlobalStyle } from './GlobalStyle';

// arrow functions
// const Name = () => {} i.e 
// const Star = () => React.createElement('div', null, 'Richard Kalibbala'); without JSX

function App() {
  return (
      <div className="App">
          <Header />
          <Home />
          <GlobalStyle />
    </div>
  );
}

export default App;
