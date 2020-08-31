import { takeLatest, call, all, put } from "redux-saga/effects";
import { getList } from "./call";
import { notification } from "antd";

export function* getListSaga() {
  yield put({ type: "@pizza/LOADING", payload: true });
  try {
    const { data } = yield call(getList);
    yield put({ type: "@pizza/GET_LIST_SUCCESS", payload: data });
    yield put({ type: "@pizza/LOADING", payload: false });
  } catch (error) {
    notification.error({ message: "Erro", description: "Error API." });
    yield put({ type: "@pizza/LOADING", payload: false });
  }
}

export default all([takeLatest("@pizza/GET_LIST", getListSaga)]);
