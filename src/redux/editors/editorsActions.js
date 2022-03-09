import EditorsActionTypes from "./editorsTypes"

export const fetchEditorsStart = () => ({
  type: EditorsActionTypes.FETCH_EDITORS_START,
})

export const fetchEditorsSuccess = editors => ({
  type: EditorsActionTypes.FETCH_EDITORS_SUCCESS,
  payload: editors,
})
export const fetchEditorsFailure = errorMessage => ({
  type: EditorsActionTypes.FETCH_EDITORS_FAILURE,
  payload: errorMessage,
})
