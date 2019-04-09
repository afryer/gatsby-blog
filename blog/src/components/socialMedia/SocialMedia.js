import React, { PropTypes } from "react"
import styles from "./SocialMedia.module.scss"

const SocialMedia = () => {
  return (
    <div className={[styles.socialList]}>
      <h3>Follow Us</h3>
      <ul className={[styles.socialList__list]}>
        <li className={[styles.socialList__item]}>
          <a
            href="https://www.strava.com/athletes/663067"
            className={[styles.socialList__link, styles.socialList__linkStrava]}
          >
            Strava
          </a>
        </li>
        <li className={[styles.socialList__item]}>
          <a
            href="https://www.instagram.com/anthonyjfryer/"
            className={[
              styles.socialList__link,
              styles.socialList__linkInstagram,
            ]}
          >
            Instagram
          </a>
        </li>
        <li className={[styles.socialList__item]}>
          <a
            href="https://twitter.com/ajf"
            className={[
              styles.socialList__link,
              styles.socialList__linkTwitter,
            ]}
          >
            Twitter
          </a>
        </li>
        <li className={[styles.socialList__item]}>
          <a
            href="#"
            className={[
              styles.socialList__link,
              styles.socialList__linkYoutube,
            ]}
          >
            Youtube
          </a>
        </li>
        <li className={[styles.socialList__item]}>
          <a
            href="#"
            className={[styles.socialList__link, styles.socialList__linkEmail]}
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  )
}

SocialMedia.propTypes = {}

export default SocialMedia
