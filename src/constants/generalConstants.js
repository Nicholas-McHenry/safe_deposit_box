export const statusValues = Object.freeze({
  LOCKED: "Locked",
  UNLOCKED: "Unlocked"
});

export const statusMessages = Object.freeze({
  BLANK: "",
  ERROR: "Error",
  READY: "Ready",
  LOCKING: "Locking",
  UNLOCKING: "Unlocking",
  SERVICE: "Service",
  VALIDATING: "Validating"
});

export const numpadValues = Object.freeze({
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  ZERO: "0",
  ASTERIX: "*",
  LOCK: "L"
});

export const numpadValuesOrder = [
  numpadValues.SEVEN,
  numpadValues.EIGHT,
  numpadValues.NINE,
  numpadValues.FOUR,
  numpadValues.FIVE,
  numpadValues.SIX,
  numpadValues.ONE,
  numpadValues.TWO,
  numpadValues.THREE,
  numpadValues.ASTERIX,
  numpadValues.ZERO,
  numpadValues.LOCK
];

export const appActions = Object.freeze({
  INPUT_PASSCODE: "INPUT_PASSCODE",
  CHANGE_STATUS: "CHANGE_STATUS",
  CHANGE_MESSAGE: "CHANGE_MESSAGE",
  CREATE_PASSCODE: "CREATE_PASSCODE",
  BUTTON_ACTIVITY: "BUTTON_ACTIVITY"
});

export const sagaActions = Object.freeze({
  VALIDATE_SN: "VALIDATE_SN"
});
