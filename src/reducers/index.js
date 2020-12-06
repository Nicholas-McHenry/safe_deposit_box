import { combineReducers } from "redux";
import { appActions } from "../constants/generalConstants";

const serialNumberReducer = (serialNumber = null, action) => {
  return serialNumber;
};

const statusReducer = (status = null, action) => {
  if (action.type === appActions.CHANGE_STATUS) {
    return action.payload;
  }
  return status;
};

const passcodeReducer = (passcode = null, action) => {
  if (action.type === appActions.CREATE_PASSCODE) {
    return action.payload;
  }
  return passcode;
};

const inputPasscodeReducer = (inputtedPasscode = null, action) => {
  if (action.type === appActions.INPUT_PASSCODE) {
    if (inputtedPasscode != null) {
      if (action.payload != null) {
        return inputtedPasscode + action.payload;
      } else {
        return null;
      }
    } else {
      return action.payload;
    }
  }

  return inputtedPasscode;
};

const messageReducer = (message = null, action) => {
  if (action.type === appActions.CHANGE_MESSAGE) {
    return action.payload;
  }
  return message;
};

export default combineReducers({
  status: statusReducer,
  message: messageReducer,
  serialNumber: serialNumberReducer,
  passcode: passcodeReducer,
  inputPasscode: inputPasscodeReducer
});
