import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation_bar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
/*
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref: React.RefObject<HTMLElement> | string) => {
    if (ref && (typeof ref !== 'string') && ref.current) {
      // Scroll to the top of the section
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    } else if (typeof ref === 'string') {
      // Handle navigation to URL here, e.g., using window.location.href
      window.location.href = ref;
    }
  };
  */

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolling ? 'navbarDark' : ''
      } navbarScroll`}
    >
      <div className="container">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Welcome</Text>
        </View>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <TouchableOpacity>
                <View style={styles.button}>
                <a href='#home'><Text style={styles.buttonText}>Home</Text></a>   
                </View>
              </TouchableOpacity>
            </li>
            <li className="nav-item">
              <TouchableOpacity>
                <View style={styles.button}>
                 <a href='#about'><Text style={styles.buttonText}>About</Text></a>              
                </View>
              </TouchableOpacity>
            </li>
            <li className="nav-item">
              <TouchableOpacity>
                <View style={styles.button}>
                <a href='#services'><Text style={styles.buttonText}>Services</Text></a>   
                </View>
              </TouchableOpacity>
            </li>
            <li className="nav-item">
              <TouchableOpacity>
                <View style={styles.button}>
                <a href='#portfolio'><Text style={styles.buttonText}>Portfolio</Text></a>   
                </View>
              </TouchableOpacity>
            </li>
            <li className="nav-item">
              <TouchableOpacity>
                <View style={styles.button}>
                <a href='#contact'><Text style={styles.buttonText}>Contact</Text></a>   
                </View>
              </TouchableOpacity>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    backgroundColor: 'none',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Navbar;
