import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import "./styles/global.scss"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
