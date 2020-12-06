import React from "react";
import { connect } from "react-redux";
import { changeMessage, inputPasscode } from "../actions";
import { statusMessages } from "../constants/generalConstants";

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
    if (prevProps.enteredPasscode !== this.props.enteredPasscode) {
      const { dispatch } = this.props;
      clearTimeout(this.state.screenTimeout);

      this.setState({
        backlight: "on",
        screenTimeout: setTimeout(() => {
          this.setState({
            backlight: "off"
          });
        }, 5000)
      });

      if (this.props.enteredPasscode === "000000") {
        setTimeout(() => {
          dispatch(inputPasscode(null));
          dispatch(changeMessage(statusMessages.SERVICE));
        }, 1200);
      }
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
    enteredPasscode: state.inputPasscode
  };
};

export default connect(mapStateToProps)(Screen);
