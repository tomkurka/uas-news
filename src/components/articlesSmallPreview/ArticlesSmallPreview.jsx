import React from "react"
import ArticleSmallPreview from "../articleSmallPreview/ArticleSmallPreview"

import "./articlesSmallPreview.scss"

const ArticlesSmallPreview = ({ articles, label }) => {
  if (!articles || articles.length === 0) return <div></div>
  return (
    <div className="articles-small-preview">
      <div className="articles-small-preview-container">
        <div className="label">{label}</div>
        <div className="articles-container">
          {articles?.map(article => (
            <ArticleSmallPreview article={article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticlesSmallPreview
