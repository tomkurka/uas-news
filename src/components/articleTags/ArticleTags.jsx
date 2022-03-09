import React from "react"

import "./articleTags.scss"

const ArticleTags = ({ tags }) => {
  return (
    <div className="article-tags">
      {tags?.map(tag => (
        <div className="tag" key={tag?.id}>
          {tag?.value}
        </div>
      ))}
    </div>
  )
}

export default ArticleTags
