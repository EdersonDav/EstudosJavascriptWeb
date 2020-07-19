import React from 'react';
import Header from './Header';
import Counter from './Counter'

function App() {
  return (
    <div>
      <Header name="Ederson" links={["Home", "Contact", "Login", "About"]} />
      <Counter />
    </div>
  );
}

export default App;
