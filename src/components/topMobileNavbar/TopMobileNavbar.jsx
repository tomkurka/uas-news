import React from "react"
import { withRouter } from "react-router-dom"
import { ICONLogoOutline } from "../../icon/icons"
import DarkThemeToggle from "../darkThemeToggle/DarkThemeToggle"

import "./topMobileNavbar.scss"

const TopMobileNavbar = ({ history }) => {
  return (
    <div className="top-navbar-container-mobile">
      <div className="side-logo" onClick={() => history.push("/")}>
        <ICONLogoOutline className="app-icon" />
        <div className="app-name">
          UAS <span className="app-name-bold">News</span>
        </div>
      </div>
      <DarkThemeToggle className="top-navbar-mobile-theme-toggle" />
    </div>
  )
}

export default withRouter(TopMobileNavbar)
