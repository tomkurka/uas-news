import React from "react"
import {
  ICONArchiveBold,
  ICONArchiveOutline,
  ICONLogoBold,
  ICONLogoOutline,
  ICONUserBold,
  ICONUserOutline,
} from "../../icon/icons"
import { withRouter } from "react-router-dom"
import DarkThemeToggle from "../darkThemeToggle/DarkThemeToggle"

import "./navbar.scss"

const Navbar = ({ location, history }) => {
  const path = location.pathname
  return (
    <div className="navbar">
      <div className="theme-container">
        <DarkThemeToggle />
      </div>

      <div className="navbar-container-desktop">
        <div className="side-logo" onClick={() => history.push("/")}>
          <ICONLogoOutline className="app-icon" />
          <div className="app-name">
            UAS <span className="app-name-bold">News</span>
          </div>
        </div>
        <div className="side-links">
          <div
            onClick={() => history.push("/")}
            className={`link ${path === "/" || path.includes("article") ? "active" : ""}`}
          >
            Novinky
          </div>
          <div
            onClick={() => history.push("/editors")}
            className={`link ${path.includes("editor") ? "active" : ""}`}
          >
            Redaktoři
          </div>
          <div
            onClick={() => history.push("/about")}
            className={`link ${path === "/about" ? "active" : ""}`}
          >
            O Stránce
          </div>
        </div>
      </div>

      <div className="bottom-navbar-container-mobile">
        <div className="links-container">
          <div
            onClick={() => history.push("/")}
            className={`link-box ${path === "/" || path.includes("article") ? "active" : ""}`}
          >
            {path === "/" ? (
              <ICONLogoBold className="link-icon" />
            ) : (
              <ICONLogoOutline className="link-icon" />
            )}
            <div className="link-label">Novinky</div>
          </div>
          <div
            onClick={() => history.push("/editors")}
            className={`link-box ${path.includes("editor") ? "active" : ""}`}
          >
            {path.includes("editor") ? (
              <ICONUserBold className="link-icon" />
            ) : (
              <ICONUserOutline className="link-icon" />
            )}
            <div className="link-label">Redaktoři</div>
          </div>
          <div
            onClick={() => history.push("/about")}
            className={`link-box ${path === "/about" ? "active" : ""}`}
          >
            {path === "/about" ? (
              <ICONArchiveBold className="link-icon" />
            ) : (
              <ICONArchiveOutline className="link-icon" />
            )}
            <div className="link-label">O Stránce</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
