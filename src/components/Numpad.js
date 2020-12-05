import React from "react";
import { connect } from "react-redux";
import {
  numpadValues,
  statusValues,
  statusMessages
} from "../constants/generalConstants";
import { inputPasscode, changeStatus, changeMessage } from "../actions";

class Numpad extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.checkEnteredPasscode = this.checkEnteredPasscode.bind(this);
    this.clearInputPasscode = this.clearInputPasscode.bind(this);
    this.state = {
      inputTimeout: null,
      lockingTimeout: null
    };
  }

  buttonClicked(value) {
    const { inputTimeout } = this.state;
    const { dispatch, status } = this.props;

    if (status === statusValues.LOCKED) {
      if (value !== numpadValues.LOCK && value !== numpadValues.ASTERIX) {
        dispatch(inputPasscode(value));
        if (inputTimeout != null) {
          clearTimeout(inputTimeout);
        }

        this.setState({
          inputTimeout: setTimeout(() => {
            this.checkEnteredPasscode();
          }, 1200)
        });
      } else {
        dispatch(changeMessage(statusMessages.ERROR));
        this.clearInputPasscode();
      }
    }
  }

  checkEnteredPasscode() {
    const { dispatch, passcode, enteredPasscode } = this.props;
    if (passcode === enteredPasscode) {
      dispatch(changeMessage(statusMessages.UNLOCKING));
      setTimeout(() => {
        dispatch(changeStatus(statusValues.UNLOCKED));
        dispatch(changeMessage(statusMessages.READY));
      }, 3000);
    } else {
      dispatch(changeMessage(statusMessages.ERROR));
      this.clearInputPasscode();
    }
  }

  clearInputPasscode() {
    this.props.dispatch(inputPasscode(null));
  }

  render() {
    return (
      <div className="sdb-numpad">
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.SEVEN)}
        >
          {numpadValues.SEVEN}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.EIGHT)}
        >
          {numpadValues.EIGHT}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.NINE)}
        >
          {numpadValues.NINE}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.FOUR)}
        >
          {numpadValues.FOUR}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.FIVE)}
        >
          {numpadValues.FIVE}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.SIX)}
        >
          {numpadValues.SIX}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.ONE)}
        >
          {numpadValues.ONE}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.TWO)}
        >
          {numpadValues.TWO}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.THREE)}
        >
          {numpadValues.THREE}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.ASTERIX)}
        >
          {numpadValues.ASTERIX}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.ZERO)}
        >
          {numpadValues.ZERO}
        </button>
        <button
          className="btn"
          onClick={() => this.buttonClicked(numpadValues.LOCK)}
        >
          {numpadValues.LOCK}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    passcode: state.passcode,
    enteredPasscode: state.inputPasscode
  };
};

export default connect(mapStateToProps)(Numpad);
