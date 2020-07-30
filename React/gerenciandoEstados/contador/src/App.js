import React from 'react';
import './App.css';
import Count from './components/Count'
import Header from './components/Header'
// import { CountProvider } from './CountContext'
import reducerCount from './reducers/countReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function App() {
  const store = createStore(reducerCount)
  return (
    <div className="App">
      <Provider store={store}>
        {/* <CountProvider> */}
        <Header></Header>
        <Count></Count>
        {/* </CountProvider> */}
      </Provider>
    </div>
  );
}

export default App;
