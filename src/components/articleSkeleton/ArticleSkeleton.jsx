import React from "react"

import "./articleSkeleton.scss"

const ArticleSkeleton = () => {
  return (
    <div className="article-page">
      <div className="article-page-container">
        <div className="main-box">
          <div className="title skeleton" style={{ color: "transparent" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tom Tom
          </div>
          <div className="article-tags">
            <div className="tag skeleton">Lorem 2</div>
            <div className="tag skeleton">Lorem 545</div>
            <div className="tag skeleton">Lorem 2</div>
          </div>
          <div className="information-container">
            <div className="skeleton">Tomas Kurka 2022</div>
            <div className="skeleton">Article Options</div>
          </div>
        </div>
        <div className="main-img-box skeleton">
          <div className="main-img skeleton-background">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, exercitationem. Lorem
          </div>
        </div>
        <div className="article-box skeleton">
          <div className="highlight-section skeleton">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, labore maiores. Quis
            delectus dolore consequatur aspernatur? Exercitationem, officiis eum facilis harum
            tempore officia soluta ad, provident deleniti dolorem commodi, ratione cum autem! Optio
            error ratione provident illo odio inventore unde deleniti libero quas, modi natus
            repellendus quibusdam soluta labore incidunt!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleSkeleton
