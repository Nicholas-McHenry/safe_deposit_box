import React from "react";
import { connect } from "react-redux";
import {
  numpadValues,
  statusValues,
  statusMessages,
  numpadValuesOrder
} from "../constants/generalConstants";
import {
  inputPasscode,
  changeStatus,
  changeMessage,
  createPasscode,
  validateSerialNumber
} from "../actions";

class Numpad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkEnteredPasscode = this.checkEnteredPasscode.bind(this);
    this.clearInputPasscode = this.clearInputPasscode.bind(this);
    this.lockTheSafe = this.lockTheSafe.bind(this);
    this.validateSN = this.validateSN.bind(this);
    this.state = {
      inputTimeout: null,
      lockingTimeout: null
    };
  }

  handleClick(value) {
    const { inputTimeout } = this.state;
    const { dispatch, status, message } = this.props;

    if (status === statusValues.LOCKED) {
      if (message === statusMessages.SERVICE) {
        dispatch(inputPasscode(value));
        if (inputTimeout != null) {
          clearTimeout(inputTimeout);
        }

        this.setState({
          inputTimeout: setTimeout(() => {
            this.validateSN();
          }, 1200)
        });
      } else {
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
          this.clearInputPasscode();
        }
      }
    } else {
      if (value !== numpadValues.LOCK && value !== numpadValues.ASTERIX) {
        dispatch(inputPasscode(value));
      } else if (value === numpadValues.LOCK) {
        this.lockTheSafe();
      } else {
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
        this.clearInputPasscode();
      }, 3000);
    } else {
      this.clearInputPasscode();
    }
  }

  clearInputPasscode() {
    this.props.dispatch(inputPasscode(null));
  }

  validateSN() {
    const { enteredPasscode, dispatch, serialNumber } = this.props;
    dispatch(changeMessage(statusMessages.VALIDATING));
    /* Calls saga that will fetch an API for validating serial number */
    dispatch(validateSerialNumber(enteredPasscode, serialNumber));
  }

  lockTheSafe() {
    const { enteredPasscode, dispatch } = this.props;

    if (enteredPasscode != null && enteredPasscode.length >= 6) {
      dispatch(changeMessage(statusMessages.LOCKING));
      setTimeout(() => {
        dispatch(createPasscode(enteredPasscode));
        dispatch(inputPasscode(null));
        dispatch(changeStatus(statusValues.LOCKED));
        dispatch(changeMessage(statusMessages.READY));
      }, 3000);
    }
  }

  getButtonList() {
    return numpadValuesOrder.map((element, index) => {
      return (
        <button
          key={index}
          className="btn"
          onClick={() => this.handleClick(element)}
        >
          {element}
        </button>
      );
    });
  }

  render() {
    return <div className="sdb-numpad">{this.getButtonList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    passcode: state.passcode,
    enteredPasscode: state.inputPasscode,
    message: state.message,
    serialNumber: state.serialNumber
  };
};

export default connect(mapStateToProps)(Numpad);
