import React from 'react'

const Header = () => {
    
  return (
    <div>
        <div className='container-navbar'>
            <div className='logo'>Coding</div>
            <nav>
                <ul className='navbar'>
                    <li><a href='#'><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href='#'><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href='#'><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header