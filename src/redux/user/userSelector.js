import { createSelector } from "reselect"

const selectUser = state => state.user

export const selectTheme = createSelector([selectUser], user => user.theme)

export const selectFavoriteArticles = createSelector([selectUser], user => user.favoriteArticles)

export const selectFavoriteArticle = id =>
  createSelector([selectFavoriteArticles], article => article?.[id]?.favorite || false)
