import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { share } from "../../functions/basic/share"
import { ICONHeartBold, ICONHeartOutline, ICONShareOutline } from "../../icon/icons"
import { userToggleFavoriteArticle } from "../../redux/user/userActions"
import { selectFavoriteArticle } from "../../redux/user/userSelector"

import "./articleOptions.scss"

const ArticleOptions = ({ article, favoriteArticle, toggleFavoriteArticle }) => {
  const handleShare = () => {
    share(`https://uas-news.netlify.app/article/${article?.id}`)
  }
  return (
    <div className="article-options ripple">
      {favoriteArticle ? (
        <div className="ripple">
          <ICONHeartBold className="icon" onClick={() => toggleFavoriteArticle(article?.id)} />
        </div>
      ) : (
        <div className="ripple">
          <ICONHeartOutline className="icon" onClick={() => toggleFavoriteArticle(article?.id)} />
        </div>
      )}
      <div className="ripple">
        <ICONShareOutline className="icon" onClick={handleShare} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  favoriteArticle: selectFavoriteArticle(ownProps.article.id)(state),
})

const mapDispatchToProps = dispatch => ({
  toggleFavoriteArticle: id => dispatch(userToggleFavoriteArticle(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleOptions))
