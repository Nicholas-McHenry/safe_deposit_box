import { appActions } from "../constants/generalConstants";

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
