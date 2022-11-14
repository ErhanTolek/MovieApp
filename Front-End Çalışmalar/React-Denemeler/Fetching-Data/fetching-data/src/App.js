import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
function App() {
  const [data, setData] = useState("");
  
  useEffect(()=>{
    fetch("https://api.github.com/users/ErhanTolek")
    .then(res => {res.json()})
    .then(setData)
  })
  console.log(data)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
