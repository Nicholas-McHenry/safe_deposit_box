import React from "react";
import "./App.css";
import Numpad from "./components/Numpad";
import Screen from "./components/Screen";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="sdb-container">
          <div className="sdb-body">
            <Screen />
            <Numpad />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
