import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {posts.map(({ node }) => {
        const { title, author } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <h2>{title}</h2>
              <p>Posting By {author}</p>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
