import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.socialIcons}>
        <View style={styles.oneIcon}>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://www.twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://www.twitch.tv/" target="_blank">
            <FontAwesomeIcon icon={faTwitch} size="lg" style={styles.icon} />
          </a>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#808080', // Customize your footer's background color
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 50,
    color: '#333', // Customize the icon color
  },
  oneIcon: {
    padding: 5,
  },
});

export default Footer;
