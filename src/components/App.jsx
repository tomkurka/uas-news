import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import ArticlePage from "../pages/article/ArticlePage"
import EditorPage from "../pages/editor/EditorPage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import ArticlesPage from "../pages/articles/ArticlesPage"
import { fetchArticlesStart } from "../redux/articles/articlesActions"
import { connect } from "react-redux"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import EditorsPage from "../pages/editors/EditorsPage"
import AboutPage from "../pages/about/AboutPage"
import TopMobileNavbar from "./topMobileNavbar/TopMobileNavbar"
import ScrollToTop from "../functions/react/ScrollToTop"
import { fetchEditorsStart } from "../redux/editors/editorsActions"

const App = ({ fetchArticles, fetchEditors }) => {
  useEffect(() => {
    fetchArticles()
    fetchEditors()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <ScrollToTop />
      <TopMobileNavbar />
      <Navbar />
      <div className="padding-top"></div>
      <Switch>
        <Route path="/" exact component={ArticlesPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/article/:articleId" component={ArticlePage} />
        <Route exact path="/editors" component={EditorsPage} />
        <Route exact path="/editor/:editorId" component={EditorPage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticlesStart()),
  fetchEditors: () => dispatch(fetchEditorsStart()),
})

export default connect(null, mapDispatchToProps)(App)
