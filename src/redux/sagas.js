import { call, put, all, takeLatest } from "redux-saga/effects";
import * as TYPES from "./types";
import axios from "axios";

/*
const TOKEN = "sdfa";
import useGetToken from "../hooks/useGetToken";
 */

export default function* saga() {
  yield all([
    takeLatest(TYPES.FETCH_ISSUES_REQUEST, fetch_issues),
    takeLatest(TYPES.FETCH_ISSUE_REQUEST, fetch_issue),
  ]);
}

const get_query = (url) => {
  axios.get(url).then((response) => response.data);
};

function* fetch_issues({ payload }) {
  const url_issues = TYPES.URL_ISSUES;
  try {
    const user = yield call(get_query, url_issues);
    yield put({ type: TYPES.FETCH_ISSUES_SUCCESS, payload: user });
  } catch (e) {
    const msg = "No se obtiene respuesta del servidor, ☹️";
    yield put({ type: TYPES.FETCH_ISSUES_FAILURE, payload: { msg } });
  }
}

function* fetch_issue({ payload }) {
  const url_issue = TYPES.URL_ISSUE;
  try {
    yield call(get_query, url_issue);
    yield put({ type: TYPES.FETCH_ISSUE_SUCCESS, payload });
  } catch (e) {
    const msg = "No se obtiene respuesta del servidor, ☹️";
    yield put({ type: TYPES.FETCH_ISSUE_FAILURE, payload: { msg } });
  }
}
