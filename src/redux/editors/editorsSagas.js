import { put, all, call, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { convertArrayToObject } from "../../functions/redux/reduxFunctions"
import { fetchEditorsFailure, fetchEditorsSuccess } from "./editorsActions"

import EditorsActionTypes from "./editorsTypes"

export function* fetchEditorsAsync() {
  try {
    const editorsRef = yield firestore.collection("/users")
    const snapshot = yield editorsRef.get()
    const editors = yield snapshot.docs.map(doc => doc.data())
    const editorsObject = convertArrayToObject(editors, "id")
    yield put(fetchEditorsSuccess(editorsObject))
  } catch (error) {
    yield put(fetchEditorsFailure(error.message))
  }
}

export function* fetchEditorsStart() {
  yield takeLatest(EditorsActionTypes.FETCH_EDITORS_START, fetchEditorsAsync)
}

export default function* editorsSagas() {
  yield all([call(fetchEditorsStart)])
}
