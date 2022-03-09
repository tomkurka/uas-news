import UserActionTypes from "./userTypes"
import { toggleTheme, toggleFavoriteArticle } from "./userUtils"

const initialState = {
  theme: "light",
  favoriteArticles: {},
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: toggleTheme(state),
      }
    case UserActionTypes.TOGGLE_FAVORITE_ARTICLE:
      return {
        ...state,
        favoriteArticles: toggleFavoriteArticle(state.favoriteArticles, action.payload),
      }
    default:
      return state
  }
}

export default userReducer
