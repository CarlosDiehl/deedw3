import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-black backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} alt="logo" className="h-[60px]" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a className="font-medium text-white hover:text-[#EFCCBF] px-5 py-3 flex items-center transition duration-150 ease-in-out" href="http://paydece.io" target="_blank" rel="noopener noreferrer">By paydece</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=17866331409&text=%C2%A1Hola%21+Quiero+que+se+comuniquen+conmigo+desde+el+equipo+de+deedw3." target="_blank">
                  <div className="btn-sm text-[#1A1A2D] bg-[#EFCCBF] hover:text-white hover:bg-gray-800 ml-3">
                    <span>Contactenos</span>
                    <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>                  
                  </div>
                </a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
