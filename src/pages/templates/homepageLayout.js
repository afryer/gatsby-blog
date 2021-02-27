import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

import '../../assets/scss/styles.scss'

const HomepageLayout = ({ children }) => {

  const scrollToElement = () => { 
    document.getElementById("wrapper").scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
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
          <div className="bg">
                      <Header siteTitle={data.site.siteMetadata.title} />

            <button className="media-header-promo__button" onClick={scrollToElement}><span className="visually-hidden">Scroll down</span></button>
          </div>
        </div>
        <div className="wrapper" id="wrapper">
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
