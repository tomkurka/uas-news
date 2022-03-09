import { createSelector } from "reselect"

const selectReduxArticles = state => state.articles

export const selectArticles = createSelector([selectReduxArticles], articles => articles.articles)

export const selectArticlesArray = createSelector([selectArticles], articles =>
  Object.values(articles)
)

export const selectArticlesArraySortedByDate = createSelector([selectArticlesArray], articles =>
  articles.sort((a, b) => b.lastModifiedAt - a.lastModifiedAt)
)

export const selectEditorArticlesArraySortedByDate = editorId =>
  createSelector([selectArticlesArraySortedByDate], articles =>
    articles.filter(a => a.authorId === editorId)
  )

export const selectArticle = id =>
  createSelector([selectArticles], articles => articles[id] || undefined)

export const selectArticleSections = id =>
  createSelector([selectArticle(id)], articles => articles?.sections)

export const selectArticleSectionsOrder = id =>
  createSelector([selectArticle(id)], articles => articles?.sectionsOrder)

export const selectArticleSectionsArray = id =>
  createSelector(
    [selectArticleSections(id), selectArticleSectionsOrder(id)],
    (sections, sectionOrder) => sectionOrder?.map(name => sections[name])
  )

export const selectArticlesArrayWithout = (id, length = 10) =>
  createSelector([selectArticlesArraySortedByDate], sections =>
    sections?.filter(selection => selection?.id !== id).slice(0, length)
  )
