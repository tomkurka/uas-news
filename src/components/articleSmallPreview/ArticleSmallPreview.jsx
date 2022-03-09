import React from "react"

import { withRouter } from "react-router-dom"
import { format } from "date-fns"

import "./articleSmallPreview.scss"

const ArticleSmallPreview = ({ article, history }) => {
  return (
    <div className="article-small-preview">
      <div className="article-small-preview-container">
        <div className="article-img">
          <img
            src={article?.imageUrl}
            className="article-img skeleton-background"
            alt="uas-news-img"
          />
        </div>
        <div className="text-container">
          <div className="article-title" onClick={() => history.push(`/article/${article.id}`)}>
            {article?.title}
          </div>
          <div className="information-container">
            <div className="author" onClick={() => history.push(`/editor/${article?.authorId}`)}>
              {article?.author}
            </div>
            |<div className="date">{format(new Date(article?.lastModifiedAt), "LLLL dd yyyy")}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ArticleSmallPreview)
