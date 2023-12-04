import Header from '../Header'
import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundPage,
  NotFoundPageContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NotFoundPage bgColor={isDarkTheme ? '#212121' : '#ffffff'}>
          <Header />
          <NotFoundPageContainer bgColor={isDarkTheme ? '#181818' : null}>
            <NavigationBar />
            <NotFoundContainer bgColor={isDarkTheme ? ' #181818' : '#ffffff'}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading textColor={isDarkTheme ? '#ffffff' : '#181818'}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText textColor={isDarkTheme ? '#64748b' : '#181818'}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </NotFoundPageContainer>
        </NotFoundPage>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
