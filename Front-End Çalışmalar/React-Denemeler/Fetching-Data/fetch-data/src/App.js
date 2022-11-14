
import './App.css';
import {useState, useEffect} from "react";

function GithubUser(props){

  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
      <img src={props.avatar} />
    </div>
  )
}


function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch(`https://api.github.com/users/ErhanTolek`)
    .then((response) => response.json())
    .then(setData)
  }, []);
  console.log(data);
  if(data)
    return (
      
      <GithubUser
      name={data.name}
      id={data.id}
      avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>
}

export default App;
