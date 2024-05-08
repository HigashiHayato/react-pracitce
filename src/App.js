// import logo from './logo.svg';
// import './App.css';
import { useState } from "react"
// import Article from "./components/Article"
import { Article } from "./components/index"

function App() {
  const [counter, setCounter] = useState(10)

  function increment() {
    counter < 10 ? setCounter(counter + 1) : setCounter(10)
  }
  function decrement() {
    counter > 0 ? setCounter(counter - 1) : setCounter(0)
  }

  return (
    <div>
      <Article
        title={'React練習'}
        contents={'東勇斗'}
      />
      <div className = "App">
        <p>{counter}</p>
        <button onClick={increment}>INCREMENT</button><br />
        <button onClick={decrement}>DECREMENT</button>
    </div>
  </div>
  );
}

export default App;
