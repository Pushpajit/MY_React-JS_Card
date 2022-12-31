import React from 'react'

function Header({className}) {
  return (
    <div className='header-main'>
        <div className="header-title">
            <h2>Pushpajit Biswas</h2>
            <p>Fontend Developer</p>
            <h6>pushpajitbiswas.website</h6>
        </div>

        <div className="header-button">
            <a href="https://mail.google.com"><i class="fa-solid fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/pushpajit-biswas-6928b715b/"><i class="fa-brands fa-linkedin"></i> Linkedln</a>
        </div>

    </div>
  )
}

export default Header
