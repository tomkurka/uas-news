import React from "react"
import { connect } from "react-redux"
import ArticlePreview from "../../components/articlePreview/ArticlePreview"
import { selectArticlesArraySortedByDate } from "../../redux/articles/articlesSelectors"
import ArticlePreviewSkeleton from "../../components/articlePreviewSkeleton/ArticlePreviewSkeleton"

import "./articlesPage.scss"

const ArticlesPage = ({ articlesArray }) => {
  return (
    <div className="articles-page">
      <div className="articles-page-container">
        {articlesArray?.length === 0 ? (
          <div className="articles-preview">
            <ArticlePreviewSkeleton />
            <ArticlePreviewSkeleton />
            <ArticlePreviewSkeleton />
            <ArticlePreviewSkeleton />
            <ArticlePreviewSkeleton />
            <ArticlePreviewSkeleton />
          </div>
        ) : (
          <div className="articles-preview">
            {articlesArray.map((article, i) => (
              <ArticlePreview article={article} key={article.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  articlesArray: selectArticlesArraySortedByDate(state),
})

export default connect(mapStateToProps)(ArticlesPage)
