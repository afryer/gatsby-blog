import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import showdown from "showdown"

const converter = new showdown.Converter()

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    <Img fixed={data.strapiArticle.image.childImageSharp.fixed} />
    <div
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(data.strapiArticle.content),
      }}
    />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
