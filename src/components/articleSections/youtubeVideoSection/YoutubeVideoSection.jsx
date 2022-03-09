import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"

const YoutubeVideoSection = ({ section }) => {
  return (
    <div className="youtube-video-section">
      <div className="youtube-video-container">
        <LiteYouTubeEmbed id={section?.linkId} title={section?.label} className="youtube-video" />
      </div>
    </div>
  )
}

export default YoutubeVideoSection
