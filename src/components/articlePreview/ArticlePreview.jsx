import React from "react"
import { withRouter } from "react-router-dom"
import ArticleOptions from "../articleOptions/ArticleOptions"
import ArticlePreviewTags from "../articlePreviewTags/ArticlePreviewTags"
import EditorInformation from "../editorInformation/EditorInformation"

import "./articlePreview.scss"

const ArticlePreview = ({ article, history }) => {
  return (
    <div className="article-preview">
      <div className="article-preview-container">
        <div className="img-side">
          <img
            src={article?.imageUrl}
            className="article-preview-img skeleton-background"
            alt="formula"
          />
        </div>
        <div className="text-side">
          <ArticlePreviewTags tags={article?.tags} />
          <div className="title" onClick={() => history.push(`/article/${article.id}`)}>
            {article?.title}
          </div>
          <div className="information-container">
            <EditorInformation article={article} />
            <ArticleOptions article={article} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ArticlePreview)
