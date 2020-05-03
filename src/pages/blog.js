// homepage template
import React from 'react'
import { Link, graphql } from 'gatsby'

import HomepageLayout from '../components/homepageLayout'
import SEO from '../components/seo'
import './index.scss'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <HomepageLayout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {posts.map(({ node }) => {
        const { title, date } = node.frontmatter

        return (
          <div key={node.id}>
            <header>
              <Link to={node.fields.slug}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
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

export default BlogPage

export const pageQuery = graphql`
  query BlogPage {
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
            date
            categories
          }
        }
      }
    }
  }
`
