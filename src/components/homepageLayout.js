import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../assets/scss/styles.scss'
import SocialMedia from './socialMedia'

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
        <div>
          <Header siteTitle={'Anthony Fryer'} />
        </div>
        <div className="wrapper">
          <SocialMedia />
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
