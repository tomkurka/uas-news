import React from "react"
import { selectEditorsArraySortedByDate } from "../../redux/editors/editorsSelector"
import EditorPreviewSkeleton from "../../components/editorPreviewSkeleton/EditorPreviewSkeleton"
import EditorPreview from "../../components/editorPreview/EditorPreview"
import { connect } from "react-redux"
import { selectArticlesArray } from "../../redux/articles/articlesSelectors"

import "./editorsPage.scss"

const EditorsPage = ({ editorsArray, articles }) => {
  return (
    <div className="editors-page">
      <div className="editors-page-container">
        <h2 className="editors-page-title">Redaktoři</h2>
        <div className="editors-container">
          <div className="editor-preview template">
            <div className="editor-preview-container template">
              <div className="name-side side template">
                <div className="editor-img"></div>
                <div className="name">Jméno a Příjmení</div>
              </div>
              <div className="data-side side">
                <div className="count-of-articles">Článků</div>
                <div className="date">Redaktor od</div>
              </div>
            </div>
          </div>
          {editorsArray?.length !== 0 ? (
            editorsArray?.map(editor => (
              <EditorPreview editor={editor} articles={articles} key={editor.id} />
            ))
          ) : (
            <>
              <EditorPreviewSkeleton />
              <EditorPreviewSkeleton />
              <EditorPreviewSkeleton />
              <EditorPreviewSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  editorsArray: selectEditorsArraySortedByDate(state),
  articles: selectArticlesArray(state),
})

export default connect(mapStateToProps)(EditorsPage)
