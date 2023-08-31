import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeroSection from './components/hero_section/hero_section';
import Contact from './components/contact_section/contact_section';
import Footer from './components/footer_section/footer_section';
import MyPortfolio from './components/portfolio_section/my_portfolio';
import MyServices from './components/servises_section/my_services';
import AboutMeSection from './components/about_me_section/about_me';
import NavigationBar from './components/nav_bar/app_navigator';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationBar />
      <HeroSection />
      <AboutMeSection />
      <MyServices />
      <MyPortfolio />
      <Contact />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white', // Set your background color here
  },
});

export default App;
