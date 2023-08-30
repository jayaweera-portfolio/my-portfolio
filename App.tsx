import React from 'react';
import { View } from 'react-native';
import HeroSection from './components/hero_section/hero_section';
import Contact from './components/contact_section/contact_section';
import Footer from './components/footer_section/footer_section';
import MyPortfolio from './components/portfolio_section/my_portfolio';
import MyServices from './components/servises_section/my_services';
import AboutMeSection from './components/about_me_section/about_me';
import NavigationBar from './components/nav_bar/nav_bar_2';

const App = () => {
  return (
    <View>

      <div>
        <NavigationBar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <AboutMeSection />
      </div>

      <div>
        <MyServices />
      </div>

      <div>
        <MyPortfolio />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>

    </View>

  );
};


export default App;
