import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  selectArticle,
  selectArticlesArrayWithout,
  selectArticleSectionsArray,
} from "../../redux/articles/articlesSelectors"

import ParagraphSection from "../../components/articleSections/paragraphSection/ParagraphSection"
import HighlightSection from "../../components/articleSections/highlightSection/HighlightSection"
import SubtitleSection from "../../components/articleSections/subtitleSection/SubtitleSection"
import ImageSection from "../../components/articleSections/imageSection/ImageSection"
import YoutubeVideoSection from "../../components/articleSections/youtubeVideoSection/YoutubeVideoSection"
import ArticleSectionTypes from "../../data/ArticleSectionTypes"
import ArticlesSmallPreview from "../../components/articlesSmallPreview/ArticlesSmallPreview"
import LinkSection from "../../components/articleSections/linkSection/LinkSection"
import EditorInformation from "../../components/editorInformation/EditorInformation"
import ArticleOptions from "../../components/articleOptions/ArticleOptions"
import ArticleTags from "../../components/articleTags/ArticleTags"

import "./articlePage.scss"
import ArticleSkeleton from "../../components/articleSkeleton/ArticleSkeleton"

const ArticlePage = ({ article, articleSectionsArray, articles }) => {
  if (!article) return <ArticleSkeleton />

  return (
    <div className="article-page">
      <div className="article-page-container">
        <div className="main-box">
          <div className="title">{article?.title}</div>
          <ArticleTags tags={article?.tags} />
          <div className="information-container">
            <EditorInformation article={article} />
            <ArticleOptions article={article} />
          </div>
        </div>

        <div className="main-img-box">
          <img
            src={article?.imageUrl}
            className="main-img skeleton-background"
            alt="uas-news-img"
          />
        </div>

        <div className="article-box">
          <div className="highlight-section">{article?.subtitle}</div>
          {articleSectionsArray?.map(section => {
            switch (section.type) {
              case ArticleSectionTypes.PARAGRAPH:
                return <ParagraphSection section={section} key={section.id} />
              case ArticleSectionTypes.HIGHLIGHT:
                return <HighlightSection section={section} key={section.id} />
              case ArticleSectionTypes.SUBTITLE:
                return <SubtitleSection section={section} key={section.id} />
              case ArticleSectionTypes.IMAGE:
                return <ImageSection section={section} key={section.id} />
              case ArticleSectionTypes.YOUTUBE_VIDEO:
                return <YoutubeVideoSection section={section} key={section.id} />
              case ArticleSectionTypes.LINK:
                return <LinkSection section={section} key={section.id} />
              default:
                return <div></div>
            }
          })}
        </div>
        <ArticlesSmallPreview articles={articles} label="Přečtěte si táké" />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  article: selectArticle(ownProps.match.params.articleId)(state),
  articleSectionsArray: selectArticleSectionsArray(ownProps.match.params.articleId)(state),
  articles: selectArticlesArrayWithout(ownProps.match.params.articleId, 6)(state),
})

export default connect(mapStateToProps)(withRouter(ArticlePage))
