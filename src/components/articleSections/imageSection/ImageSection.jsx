import React from "react"

const ImageSection = ({ section }) => {
  return (
    <div className="image-section">
      <img className="image-section-img" src={section?.imageUrl} alt="uas-news-img" />
    </div>
  )
}

export default ImageSection
