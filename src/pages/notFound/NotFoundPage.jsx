import React from "react"
import { withRouter } from "react-router-dom"

import "./notFoundPage.scss"

const NotFoundPage = ({ history }) => {
  return (
    <div className="not-found-page">
      <div className="not-found-page-container">
        <h2 className="title">Not Found</h2>
        <div className="link" onClick={() => history.push("/")}>
          Return Home
        </div>
      </div>
    </div>
  )
}

export default withRouter(NotFoundPage)
