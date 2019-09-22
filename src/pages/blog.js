import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'
import BrowseBlogPosts from '../components/blog-post-layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BrowseBlogPosts />
    </Layout>
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
            date(formatString: "MM/DD/YYYY")
            categories
          }
        }
      }
    }
  }
`
