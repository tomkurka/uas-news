import UserActionTypes from "./userTypes"

export const userToggleTheme = data => ({
  type: UserActionTypes.TOGGLE_THEME,
  payload: data,
})

export const userToggleFavoriteArticle = id => ({
  type: UserActionTypes.TOGGLE_FAVORITE_ARTICLE,
  payload: id,
})
