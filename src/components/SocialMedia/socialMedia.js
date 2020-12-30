import React from 'react'
import TwitterIcon from '../Icons/twitter'
import StravaIcon from '../Icons/strava'
import InstagramIcon from '../Icons/instagram'
import LinkedInIcon from '../Icons/linkedin'
import styles from './socialMedia.module.css'

const SocialMedia = () => {
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

export default SocialMedia
