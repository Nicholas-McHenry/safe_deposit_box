import { appActions, sagaActions } from "../constants/generalConstants";

export const inputPasscode = passcode => {
  return {
    type: appActions.INPUT_PASSCODE,
    payload: passcode
  };
};

export const changeStatus = status => {
  return {
    type: appActions.CHANGE_STATUS,
    payload: status
  };
};

export const changeMessage = message => {
  return {
    type: appActions.CHANGE_MESSAGE,
    payload: message
  };
};

export const createPasscode = passcode => {
  return {
    type: appActions.CREATE_PASSCODE,
    payload: passcode
  };
};

export const validateSerialNumber = (passcode, serialNumber) => {
  return {
    type: sagaActions.VALIDATE_SN,
    payload: passcode,
    serialNumber
  };
};

export const buttonActivity = buttonActivity => {
  return {
    type: appActions.BUTTON_ACTIVITY,
    payload: buttonActivity
  };
};
