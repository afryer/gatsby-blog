import React from 'react'
import TwitterIcon from './icons/twitter'
import StravaIcon from './icons/strava'
import InstagramIcon from './icons/instagram'
import LinkedInIcon from './icons/linkedin'
import styles from '../components/socialMedia.module.css'

const socialMedia = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li className={styles.socialLinks__li}>
          <a
            href="https://twitter.com/ajf?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a
            href="https://www.strava.com/athletes/663067"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StravaIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a
            href="https://www.instagram.com/anthonyjfryer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
        <li className={styles.socialLinks__li}>
          <a
            href="https://www.linkedin.com/in/anthonyfryer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default socialMedia
