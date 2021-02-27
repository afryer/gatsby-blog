import React from "react";
import SocialMedia from "../SocialMedia/socialMedia.js"
import styles from './footer.module.css'

const Footer = () => { 
	return (
		<footer className={ styles.footer}>
			<div className={ styles.footer__copy}><p className={styles.copyright}>© {new Date().getFullYear()}, Anthony Fryer</p></div>
			<div className={ styles.footer__socialMedia}>
				<SocialMedia />
			</div>
		</footer>
	)
}

export default Footer;