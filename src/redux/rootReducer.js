import { combineReducers } from "redux"
import articlesReducer from "./articles/articlesReducer"
import userReducer from "./user/userReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import editorsReducer from "./editors/editorsReducer"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"],
  blacklist: ["articles", "editors"],
}

const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
  editors: editorsReducer,
})

export default persistReducer(persistConfig, rootReducer)
