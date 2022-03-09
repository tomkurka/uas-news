import React from "react"
// import { format } from "date-fns"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectEditor } from "../../redux/editors/editorsSelector"
import ArticlesSmallPreview from "../../components/articlesSmallPreview/ArticlesSmallPreview"
import { selectEditorArticlesArraySortedByDate } from "../../redux/articles/articlesSelectors"
import EditorPageSkeleton from "../../components/editorPageSkeleton/EditorPageSkeleton"

import "./editorPage.scss"

const EditorPage = ({ editor, articles }) => {
  if (!editor) return <EditorPageSkeleton />

  return (
    <div className="editor-page">
      <div className="editor-page-container">
        <h2 className="editor-name">{editor?.fullName}</h2>
        <div className="editor-information">
          <div className="text-paragraph">{editor?.bio}</div>
        </div>
      </div>
      <ArticlesSmallPreview label="Redaktora články" articles={articles} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  editor: selectEditor(ownProps.match.params.editorId)(state),
  articles: selectEditorArticlesArraySortedByDate(ownProps.match.params.editorId)(state),
})

export default withRouter(connect(mapStateToProps)(EditorPage))
