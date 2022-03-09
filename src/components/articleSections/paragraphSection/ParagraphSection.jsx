import React from "react"
import Linkify from "react-linkify"

const ParagraphSection = ({ section }) => {
  return (
    <div className="paragraph-section">
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="blank" className="article-link" href={decoratedHref} key={key}>
            {decoratedText}
          </a>
        )}
      >
        {section?.paragraph}
      </Linkify>
    </div>
  )
}

export default ParagraphSection
