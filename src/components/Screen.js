import React from "react";
import { connect } from "react-redux";

class Screen extends React.Component {
  render() {
    const { status, enteredPasscode, message } = this.props;

    return (
      <div className="sdb-screen backlight-off">
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
