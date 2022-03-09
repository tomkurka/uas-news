import ArticlesActionTypes from "./articlesTypes"

const initialState = {
  articles: [],
  isFetchingArticles: false,
  errorMessage: "",
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES_START:
      return {
        ...state,
        isFetchingArticles: true,
        errorMessage: "",
      }
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isFetchingArticles: false,
        errorMessage: "",
      }
    case ArticlesActionTypes.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isFetchingArticles: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default articlesReducer
