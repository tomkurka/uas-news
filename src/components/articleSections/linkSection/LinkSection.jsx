import React from "react"
import { ICONLinkOutline } from "../../../icon/icons"

const LinkSection = ({ section }) => {
  return (
    <div className="link-section">
      <ICONLinkOutline className="link-icon" />
      <a className="link" href={section?.link} target="_blank" without rel="noreferrer">
        {section.name}
      </a>
    </div>
  )
}

export default LinkSection
