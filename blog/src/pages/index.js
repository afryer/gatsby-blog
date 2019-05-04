import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleList"

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
          created_at
          slug
          content
          preview
        }
      }
    }
  }
`
