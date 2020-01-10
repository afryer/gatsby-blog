import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SocialMedia from './SocialMedia'

const Header = ({ siteTitle }) => (
  <header className="header">
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
    <SocialMedia />
  </header>
)
// <nav className="navigation">
//   <ul>
//     <li>
//       <Link to="/blog">blog</Link>
//     </li>
//     <li>
//       <Link to="/contact">contact</Link>
//     </li>
//   </ul>
// </nav>

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
