import React from 'react'
import meta from '../images/facebook.png'
import github from '../images/github.png'
import insta from '../images/instagram.png'
import linkedln from '../images/linkedin.png'

function Footer() {
  return (
    <div className="footer-div">
      <footer>
          <a href="#"><img src={meta} alt="meta" /></a>
          <a href="https://github.com/Pushpajit?tab=repositories"><img src={github} alt="github" /></a>
          <a href="https://www.instagram.com/pushpajitbiswas/"><img src={insta} alt="insta" /></a>
          <a href="https://www.linkedin.com/in/pushpajit-biswas-6928b715b/"><img src={linkedln} alt="linkedln" /></a>
      </footer>
    </div>
  )
}

export default Footer
