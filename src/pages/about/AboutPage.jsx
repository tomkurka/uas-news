import React from "react"
import { ICONDesigntoolsOutline, ICONEditOutline } from "../../icon/icons"

import "./aboutPage.scss"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <div className="svg-logo"></div>
        <h2 className="about-page-title">O Stránce</h2>
        <div className="workers">
          <div className="worker">
            <div className="worker-container">
              <div className="icon-side">
                <ICONDesigntoolsOutline className="icon" />
              </div>
              <div className="name-side">
                <div className="position">Designer</div>
                <span className="bold">Tomáš Kůrka</span>
              </div>
            </div>
          </div>
          <div className="worker">
            <div className="worker-container">
              <div className="icon-side">
                <ICONEditOutline className="icon" />
              </div>
              <div className="name-side">
                <div className="position">Editor</div>
                <span className="bold">Martin Grafoner</span>
              </div>
            </div>
          </div>
          <div className="worker">
            <div className="worker-container">
              <div className="icon-side">
                <ICONEditOutline className="icon" />
              </div>
              <div className="name-side">
                <div className="position">Editor</div>
                <span className="bold">Jan Kos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
