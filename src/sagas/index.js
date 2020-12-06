import { call, put, takeEvery } from "redux-saga/effects";
import Apis from "../apis";
import {
  sagaActions,
  statusMessages,
  statusValues
} from "../constants/generalConstants";
import { changeMessage, changeStatus } from "../actions";

function* validateSerialNumber(action) {
  try {
    const response = yield call(Apis.validateSerialNumber, action.payload);

    if (response.sn === action.serialNumber) {
      yield put(changeStatus(statusValues.UNLOCKED));
    }
    yield put(changeMessage(statusMessages.READY));
  } catch (e) {
    console.log("There was an error while fetching the data:", e);
  }
}

function* appSaga() {
  yield takeEvery(sagaActions.VALIDATE_SN, validateSerialNumber);
}

export default appSaga;
