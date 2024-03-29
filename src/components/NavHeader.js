import React from 'react';
import './Styles/Navheader.css'
import Resume from '../assets/Madden_Resume.pdf'


export default function NavHeader({ currentPage, handlePageChange }) {

    return (

      <div className="navbar">
        
        <button href="#" className="hamburger" onClick={() => {
          let navDisplay = document.getElementsByClassName("nav-header")[0];
          if (navDisplay.hidden === true){
            navDisplay.hidden=false
          }else{
            navDisplay.hidden=true
          };
        }
          }>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className="nav-header" >
          <ul className="nav" id="">
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href={Resume}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
    
}
