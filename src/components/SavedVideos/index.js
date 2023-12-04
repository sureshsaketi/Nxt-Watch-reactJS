import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'

import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedVideosPage,
  SavedVideosPageContainer,
  SavedVideosContainer,
  SavedVideosTop,
  SavedVideosImageContainer,
  SavedVideosCardsContainer,
  SavedVideosHeading,
  NoSavedVideos,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'

      const renderSavedVideos = () => (
        <>
          <SavedVideosTop bgColor={isDarkTheme ? '#181818' : '#ebebeb'}>
            <SavedVideosImageContainer
              bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}
            >
              <HiFire size="24px" color="#ff0b37" />
            </SavedVideosImageContainer>
            <SavedVideosHeading textColor={isDarkTheme ? '#ffffff' : '#1e293b'}>
              Saved Videos
            </SavedVideosHeading>
          </SavedVideosTop>
          <SavedVideosCardsContainer>
            {savedVideos.map(eachVideo => (
              <VideoCard key={eachVideo.id} video={eachVideo} />
            ))}
          </SavedVideosCardsContainer>
        </>
      )

      const renderNoSavedVideos = () => (
        <NoSavedVideos>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading textColor={isDarkTheme ? '#ffffff' : '#1e293b'}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosText textColor={isDarkTheme ? '#ffffff' : '##7e858e'}>
            You can save your videos while you watching them
          </NoSavedVideosText>
        </NoSavedVideos>
      )

      return (
        <SavedVideosPage bgColor={bgColor}>
          <Header />
          <SavedVideosPageContainer bgColor={isDarkTheme ? '#181818' : null}>
            <NavigationBar />
            <SavedVideosContainer bgColor={isDarkTheme ? '#0f0f0f' : null}>
              {savedVideos.length > 0
                ? renderSavedVideos()
                : renderNoSavedVideos()}
            </SavedVideosContainer>
          </SavedVideosPageContainer>
        </SavedVideosPage>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
