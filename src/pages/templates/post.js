import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import Helmet from 'react-helmet'
import Date from "../../components/Date"

const BlogPostLayout = ({ children, pageContext }) => {
  console.log(pageContext)
  const { title, date } = pageContext.frontmatter
  return (
    <>
      <Layout>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <article>
          <header>
            <h1>{title} blogpost</h1>
            <Date date={date}/>
          </header>
          <MDXProvider>{children}</MDXProvider>
        </article>
      </Layout>
    </>
  )
}

export default BlogPostLayout
