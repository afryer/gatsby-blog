import React from "react"
import banner from "./banner.jpg"

const Banner = () => (
  <div
    className="banner"
    style={{ background: `url(${banner}) no-repeat center center` }}
  >
    <div className="banner__info">
      <h1 className="banner__title">Anthony Fryer</h1>
      <p className="banner__desc">Computer geek, endurance freak</p>
    </div>
  </div>
)
