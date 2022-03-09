import { deleteReference } from "../../functions/redux/reduxFunctions"

export const toggleTheme = state => {
  if (state.theme === "light") {
    return "dark"
  } else {
    return "light"
  }
}

export const toggleFavoriteArticle = (previousFavoriteArticles = {}, id) => {
  let newFavoriteArticles = deleteReference(previousFavoriteArticles)
  newFavoriteArticles?.[id]?.favorite === true
    ? (newFavoriteArticles = { ...newFavoriteArticles, [id]: { favorite: false } })
    : (newFavoriteArticles = { ...newFavoriteArticles, [id]: { favorite: true } })

  return newFavoriteArticles
}
