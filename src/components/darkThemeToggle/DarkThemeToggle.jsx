import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ICONMoonOutline, ICONSunOutline } from "../../icon/icons"
import { userToggleTheme } from "../../redux/user/userActions"
import { selectTheme } from "../../redux/user/userSelector"

const DarkThemeToggle = ({ className, toggleTheme, theme }) => {
  const changeTheme = () => {
    toggleTheme()
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-theme")
    } else {
      document.body.classList.add("dark-theme")
    }
  }, [theme])

  return (
    <div className={className} onClick={changeTheme}>
      {theme === "light" ? (
        <ICONSunOutline className="theme-icon" />
      ) : (
        <ICONMoonOutline className="theme-icon" />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  theme: selectTheme(state),
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(userToggleTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeToggle)
