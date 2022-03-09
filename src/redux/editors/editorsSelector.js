import { createSelector } from "reselect"

const selectReduxEditors = state => state.editors

export const selectEditors = createSelector([selectReduxEditors], editors => editors.editors)

export const selectEditorsArray = createSelector([selectEditors], editors => Object.values(editors))

export const selectEditorsArraySortedByDate = createSelector([selectEditorsArray], editors =>
  editors.sort((a, b) => b.joinedAt - a.joinedAt)
)

export const selectEditor = id => createSelector([selectEditors], editors => editors[id] || null)
