import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SocialMedia from "../SocialMedia/socialMedia"
import styles from "./header.module.css"
const Header = ({ siteTitle }) => {

  return (

    <header className={styles.header}>
        <h1 className="siteTitle">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: `black`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <SocialMedia />
      </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
