import { put, all, call, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { convertArrayToObject } from "../../functions/redux/reduxFunctions"
import { fetchArticlesFailure, fetchArticlesSuccess } from "./articlesActions"

import ArticlesActionTypes from "./articlesTypes"

export function* fetchArticlesAsync() {
  try {
    const articlesRef = yield firestore.collection("/publicArticles")
    const snapshot = yield articlesRef.get()

    const articles = yield snapshot.docs.map(doc => doc.data())
    const articlesObject = convertArrayToObject(articles, "id")
    yield put(fetchArticlesSuccess(articlesObject))
  } catch (error) {
    yield put(fetchArticlesFailure(error.message))
  }
}

export function* fetchArticlesStart() {
  yield takeLatest(ArticlesActionTypes.FETCH_ARTICLES_START, fetchArticlesAsync)
}

export default function* articlesSagas() {
  yield all([call(fetchArticlesStart)])
}
