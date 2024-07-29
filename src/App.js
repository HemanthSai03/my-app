import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
     <Counter/>
      <Greet name="ansari" alias="ascendion"></Greet>
      <Message />
    </div>
  );
}

export default App;
