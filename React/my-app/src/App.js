import React, { useState, useEffect } from 'react';
import Header from './Header';
import Counter from './Counter'

function App() {
  const [show, setShow] = useState(true);

  let num = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      num++
      console.log(num);
      if (num == 10) {
        setShow(false)
        clearInterval(interval)
      }
    }, 1000)
  }, [])

  if (show) {
    return (
      <div>
        <Header name="Ederson" links={["Home", "Contact", "Login", "About"]} />
        <Counter count={0} />
      </div>
    );
  } else {
    return (
      <div>
        <Header name="Ederson" links={["Home", "Contact", "Login", "About"]} />
      </div>
    );
  }
}

export default App;
