import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.scss"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    className={styles.header}
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className={styles.title}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p>{siteDescription}</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
