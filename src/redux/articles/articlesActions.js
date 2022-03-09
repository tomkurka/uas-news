import ArticlesActionTypes from "./articlesTypes"

export const fetchArticlesStart = () => ({
  type: ArticlesActionTypes.FETCH_ARTICLES_START,
})

export const fetchArticlesSuccess = articles => ({
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
  payload: articles,
})
export const fetchArticlesFailure = errorMessage => ({
  type: ArticlesActionTypes.FETCH_ARTICLES_FAILURE,
  payload: errorMessage,
})
