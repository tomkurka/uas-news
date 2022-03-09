import { format } from "date-fns"
import React from "react"
import { withRouter } from "react-router-dom"

import "./editorInformation.scss"

const EditorInformation = ({ article, history }) => {
  return (
    <div className="editor-information">
      <div className="author" onClick={() => history.push(`/editor/${article?.authorId}`)}>
        {article?.author}
      </div>
      <span className="divider">|</span>
      <div className="date">{format(new Date(article?.lastModifiedAt), "LLLL dd yyyy")}</div>
    </div>
  )
}

export default withRouter(EditorInformation)
