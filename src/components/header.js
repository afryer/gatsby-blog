import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper">
      <h1 className="siteTitle">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `black`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
