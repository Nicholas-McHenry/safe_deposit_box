import React from "react";
import { connect } from "react-redux";
import { changeMessage, inputPasscode } from "../actions";
import { statusMessages, statusValues } from "../constants/generalConstants";

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTimeout: null,
      backlight: "off"
    };
  }

  componentDidMount() {
    this.setState({
      screenTimeout: setTimeout(() => {
        this.setState({
          backlight: "off"
        });
      }, 5000)
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { dispatch } = this.props;
    if (prevProps.enteredPasscode !== this.props.enteredPasscode) {
      if (
        this.props.enteredPasscode === "000000" &&
        this.props.status !== statusValues.UNLOCKED
      ) {
        setTimeout(() => {
          dispatch(inputPasscode(null));
          dispatch(changeMessage(statusMessages.SERVICE));
        }, 1200);
      }
    }

    if (prevProps.buttonActivity !== this.props.buttonActivity) {
      clearTimeout(this.state.screenTimeout);

      this.setState({
        backlight: "on",
        screenTimeout: setTimeout(() => {
          this.setState({
            backlight: "off"
          });
        }, 5000)
      });
    }

    if (prevState.backlight === "on" && this.state.backlight === "off") {
      dispatch(inputPasscode(null));
    }
  }

  render() {
    const { status, message } = this.props;
    const { backlight } = this.state;

    return (
      <div className={`sdb-screen backlight-${backlight}`}>
        <div className="sdb-status">{status}</div>
        <div className="sdb-status-messages">{message}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    message: state.message,
    enteredPasscode: state.inputPasscode,
    buttonActivity: state.buttonActivity
  };
};

export default connect(mapStateToProps)(Screen);
