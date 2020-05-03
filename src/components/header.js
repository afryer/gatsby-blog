import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SocialMedia from './SocialMedia'
import Headroom from 'react-headroom'

const Header = ({ siteTitle }) => {
  const pinned = () => console.log('pinned')
  const unpinned = () => console.log('unpinned')
  return (
    <Headroom
      onPin={pinned}
      onUnpin={unpinned}
      wrapperStyle={{}}
      style={{
        background: '#fff',
        boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
      }}
    >
      <header className="header">
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
    </Headroom>
  )
}
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
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
