import React from 'react'
import TwitterIcon from './icons/twitter'
import StravaIcon from './icons/strava'
import InstagramIcon from './icons/instagram'
import LinkedInIcon from './icons/linkedin'
import styles from '../components/socialMedia.module.css'

const socialMedia = () => {
  return (
    <div className="socialLinks" className={styles.socialLinks}>
      <ul>
        <li className={styles.socialLinks__li}>
          <a href="https://twitter.com/ajf?lang=en">
            <TwitterIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a href="https://www.strava.com/athletes/663067">
            <StravaIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a href="https://www.instagram.com/anthonyjfryer/">
            <InstagramIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a href="https://www.linkedin.com/in/anthonyfryer/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default socialMedia
