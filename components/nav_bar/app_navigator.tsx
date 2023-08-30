// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../hero_section/hero_section';
import AboutScreen from '../about_me_section/about_me';
import ServicesScreen from '../servises_section/my_services';
import PortfolioScreen from '../portfolio_section/my_portfolio';
import ContactsScreen from '../contact_section/contact_section';
import NavigationBar from './nav_bar';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Services" component={ServicesScreen} />
        <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
        <Drawer.Screen name="Contacts" component={ContactsScreen} />
      </Drawer.Navigator>
      <NavigationBar /> {/* Include the NavigationBar component */}
    </NavigationContainer>
  );
};

export default AppNavigator;
