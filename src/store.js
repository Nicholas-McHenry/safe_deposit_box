import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { statusValues, statusMessages } from "./constants/generalConstants";
import appSaga from "./sagas";

/* Create initial store object */
const initialStore = {
  status: statusValues.UNLOCKED,
  message: statusMessages.READY,
  serialNumber: "4815162342",
  passcode: null,
  inputPasscode: null
};

/* Create saga middleware */
const sagaMiddleware = createSagaMiddleware();

/* Create store */
const store = createStore(
  reducers,
  initialStore,
  applyMiddleware(sagaMiddleware)
);

/* Run the saga */
sagaMiddleware.run(appSaga);

export { store };
