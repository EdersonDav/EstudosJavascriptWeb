import React from 'react';
import './App.css';
import Count from './components/Count'
import Header from './components/Header'
import { CountProvider } from './CountContext'

function App() {
  return (
    <div className="App">
      <CountProvider>
        <Header></Header>
        <Count></Count>
      </CountProvider>
    </div>
  );
}

export default App;
