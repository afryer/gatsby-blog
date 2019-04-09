import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./ArticleList.module.scss"
import SocialMedia from "../../components/socialMedia/SocialMedia"

const ArticleList = ({ data }) => {
  return (
    <>
      <SocialMedia />
      <div className={styles.articles}>
        {data.allStrapiArticle.edges.map(document => (
          <div className={styles.article} key={document.node.id}>
            <h2>
              <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
            </h2>
            <div className={styles.article__image}>
              <Img fixed={document.node.image.childImageSharp.fixed} />
            </div>
            <div className={styles.article__content}>
              <p>{document.node.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ArticleList
