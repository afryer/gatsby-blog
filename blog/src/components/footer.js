import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
    <a href="https://strapi.io">Strapi</a>
  </footer>
)

export default Footer
