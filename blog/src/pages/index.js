import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import banner from "./banner.jpg"
import ArticleList from "../components/articleList"

const IndexPage = ({ data }) => (
  <>
    <header>
      <div
        className="banner"
        style={{ background: `url(${banner}) no-repeat center center` }}
      >
        <div className="banner__info">
          <h1 className="banner__title">Anthony Fryer</h1>
          <p className="banner__desc">Computer geek, endurance freak</p>
        </div>
      </div>
    </header>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ArticleList data={data} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          slug
          content
          preview
        }
      }
    }
  }
`
