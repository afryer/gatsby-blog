// homepage template
import React from 'react'
import { Link, graphql } from 'gatsby'

import HomepageLayout from '../components/homepageLayout'
import SEO from '../components/seo'
import './index.scss'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <HomepageLayout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `anthony fryer`, `running`, `code`]}
      />

      {posts.map(({ node }) => {
        const { title } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <Link to={node.fields.slug}>
                <h2>{title}</h2>
              </Link>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </HomepageLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
        }
      }
    }
  }
`
