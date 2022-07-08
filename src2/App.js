import { useState, useEffect } from "react";
import './App.css';

/*
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}
*/

const App = () => {
  const [counter, setCounter] = useState(0); // hook

  // This hook will be called every time this component is rendered
  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      {/*<Person name={'John'} lastName={'Doe'} age={30} />*/}
      {/*<Person name='Mary' lastName='Doe' age={20} />*/}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
