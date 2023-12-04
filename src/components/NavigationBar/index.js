import NavigationList from '../NavigationList'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationBarContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaIconsContainer,
  ListItem,
  SocialMediaImage,
  ContactUsText,
} from './styledComponents'

const SocialMediaImagesList = {
  facebook:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
  twitter:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
  linkedin:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
}

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#212121' : null
      const textColor = isDarkTheme ? '#ffffff' : '#475569'
      return (
        <NavigationBarContainer bgColor={bgColor}>
          <NavigationList />
          <ContactUsContainer>
            <ContactUsHeading textColor={textColor}>
              Contact Us
            </ContactUsHeading>
            <SocialMediaIconsContainer>
              <ListItem>
                <SocialMediaImage
                  src={SocialMediaImagesList.facebook}
                  alt="facebook logo"
                />
              </ListItem>
              <ListItem>
                <SocialMediaImage
                  src={SocialMediaImagesList.twitter}
                  alt="teitter logo"
                />
              </ListItem>
              <ListItem>
                <SocialMediaImage
                  src={SocialMediaImagesList.linkedin}
                  alt="linked in logo"
                />
              </ListItem>
            </SocialMediaIconsContainer>
            <ContactUsText textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsText>
          </ContactUsContainer>
        </NavigationBarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
