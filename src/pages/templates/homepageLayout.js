import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

import '../../assets/scss/styles.scss'

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
    render={(data) => (
      <>
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="bg"></div>
        </div>
        <div className="wrapper">
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
