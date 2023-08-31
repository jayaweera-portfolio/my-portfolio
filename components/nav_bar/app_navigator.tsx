import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation_bar.css';
//import { Linking } from 'react-native';
//import Contact from '../contact_section/contact_section';
//import MyPortfolio from '../portfolio_section/my_portfolio';
//import MyServices from '../servises_section/my_services';
import AboutMeSection from '../about_me_section/about_me';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  //const aboutMeRef = useRef(AboutMeSection);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? 'navbarDark' : ''} navbarScroll`}>
      <div className="container">

        <a className="navbar-brand" href="#">Welcome</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={AboutMeSection}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={AboutMeSection}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={AboutMeSection}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={AboutMeSection}>Contact</a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
