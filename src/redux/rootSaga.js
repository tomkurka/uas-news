import { all, call } from "redux-saga/effects"

import articlesSagas from "./articles/articlesSagas"
import editorsSagas from "./editors/editorsSagas"

export default function* rootSaga() {
  yield all([call(articlesSagas), call(editorsSagas)])
}
