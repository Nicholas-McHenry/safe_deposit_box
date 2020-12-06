import React from "react";
import { connect } from "react-redux";
import "./App.scss";
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
            <div className="sn">S/N: {this.props.serialNumber}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    serialNumber: state.serialNumber
  };
};

export default connect(mapStateToProps)(App);
