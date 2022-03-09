import EditorsActionTypes from "./editorsTypes"

const initialState = {
  editors: [],
  isFetchingEditors: false,
  errorMessage: "",
}

const editorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EditorsActionTypes.FETCH_EDITORS_START:
      return {
        ...state,
        isFetchingEditors: true,
        errorMessage: "",
      }
    case EditorsActionTypes.FETCH_EDITORS_SUCCESS:
      return {
        ...state,
        editors: action.payload,
        isFetchingEditors: false,
        errorMessage: "",
      }
    case EditorsActionTypes.FETCH_EDITORS_FAILURE:
      return {
        ...state,
        isFetchingEditors: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default editorsReducer
