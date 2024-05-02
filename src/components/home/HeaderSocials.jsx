/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com/" className="home__social-link" target='_blank'>
      <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://www.twitter.com" className="home__social-link" target='_blank'>
      <i class="fa-brands fa-twitter"></i>
      </a>

      <a href="https://www.behance.com" className="home__social-link" target='_blank'>
      <i class="fa-brands fa-behance"></i>
      </a>

      <a href="https://www.youtube.com/@deaszy2238" className="home__social-link" target='_blank'>
      <i class="fa-brands fa-youtube"></i>
      </a>

      <a href="https://www.linkedin.com/in/bram-peerdeman-8a52a122b/" className="home__social-link" target='_blank'>
      <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  )
}

export default HeaderSocials