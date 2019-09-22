import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../assets/scss/styles.scss'

const HomepageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="bg">
          <Header siteTitle={'Anthony Fryer'} />
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 840,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default HomepageLayout
