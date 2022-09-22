
import './App.css';
import useStorage from "./useStorage";
import useLogger from "./updateLogger"



function App() {
  
  const [value, setValue] = useStorage("key", "");
  useLogger(value);
  return (
    <div className="App">
      <form >
        <input onChange={e => {setValue(e.target.value)}} value={value} id="asd" type="text" />
      </form>
    </div>
  );
}

export default App;
