// import logo from './logo.svg';
// import './App.css';
import {useState} from "react"

function App() {
  const dog = "U・x・U"
  // alert(dog)
  // const x = 3
  // const y = 4
  // const sum = x + y
  // console.log(sum)

  const [counter, setCounter] = useState(10)

  function increment() {
    // setCounter(counter + 1)
    counter < 10 ? setCounter(counter + 1) : setCounter(10)
  }
  function decrement() {
    // if (counter > 0)
    //   setCounter(counter - 1)
    counter > 0 ? setCounter(counter - 1) : setCounter(0)
  }

  return (
    <div className = "App">
      <p>{counter}</p>
      <button onClick={increment}>INCREMENT</button><br />
      <button onClick={decrement}>DECREMENT</button>
      {dog}<br/>{dog}<br/>{dog}

    </div>
  );
}

export default App;
