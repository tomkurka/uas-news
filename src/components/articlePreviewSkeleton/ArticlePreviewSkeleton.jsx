import React from "react"

const ArticlePreviewSkeleton = () => {
  return (
    <div className="article-preview">
      <div className="article-preview-container">
        <div className="img-side">
          <div className="article-preview-img skeleton">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus et unde sed
            doloremque, placeat illo necessitatibus laudantium. Optio, consequuntur?
          </div>
        </div>
        <div className="text-side">
          <div className="article-tags">
            <div className="tag skeleton">Sport</div>
            <div className="tag skeleton">Hamilton</div>
            <div className="tag skeleton">Formula</div>
          </div>
          <div className="title skeleton" style={{ color: "transparent" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, fuga cupiditate maiores
          </div>
          <div className="information-container">
            <div className="author skeleton">Lorem, ipsum dolor.</div>
            <div className="date skeleton">Lorem, ipsum.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreviewSkeleton
