import "./App.css";
import InputComponent from "./Components/InputComponent";
import ListComponent from "./Components/ListComponent";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <InputComponent />
        </div>
        <div className="col-md-6">
          <ListComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
