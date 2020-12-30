import React from "react";
import SocialMedia from "../SocialMedia/socialMedia.js"
const Footer = () => { 
	return (
		<footer>
			<SocialMedia />
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	)
}

export default Footer;