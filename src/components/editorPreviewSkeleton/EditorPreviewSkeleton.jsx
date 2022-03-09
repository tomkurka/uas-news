import React from "react"
import { ICONUserOutline } from "../../icon/icons"

const EditorPreview = () => {
  return (
    <div className="editor-preview">
      <div className="editor-preview-container">
        <div className="name-side side">
          <div className="editor-img">
            <ICONUserOutline className="icon" />
          </div>
          <div className="name skeleton">Mr Nobody Nobody</div>
        </div>
        <div className="data-side side">
          <div className="count-of-article skeleton">000</div>
          <div className="date skeleton">28.252025</div>
        </div>
      </div>
    </div>
  )
}

export default EditorPreview
