import { format } from "date-fns"
import React from "react"
import { withRouter } from "react-router-dom"
import { ICONUserOutline } from "../../icon/icons"

const EditorPreview = ({ editor, history, articles }) => {
  return (
    <div className="editor-preview">
      <div
        className="editor-preview-container"
        onClick={() => history.push(`/editor/${editor?.id}`)}
      >
        <div className="name-side side">
          <div className="editor-img">
            <ICONUserOutline className="icon" />
          </div>
          <div className="name">{editor?.fullName}</div>
        </div>
        <div className="data-side side">
          <div className="count-of-article">
            {articles?.filter(article => article.authorId === editor.id).length}
          </div>
          <div className="date">{format(new Date(editor?.joinedAt), "dd. MM. yyyy")}</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(EditorPreview)
