import React from "react"

import "./articlePreviewTags.scss"

const ArticlePreviewTags = ({ tags }) => {
  return (
    <div className="article-preview-tags">
      {tags?.map(tag => (
        <div className="tag" key={tag?.id}>
          {tag?.value}
        </div>
      ))}
    </div>
  )
}

export default ArticlePreviewTags
