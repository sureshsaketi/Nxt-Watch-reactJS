import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import GamingCard from '../GamingCard'

import {
  GamingPage,
  GamingVideosPageContainer,
  GamingVideosContainer,
  GamingTop,
  GamingVideoCardsContainer,
  GamingImageContainer,
  GamingHeading,
  GameVideoLink,
  GamingListItem,
} from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const formattedData = videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingTopView = isDarkTheme => {
    const bgColor = isDarkTheme ? '#181818' : '#ebebeb'

    return (
      <GamingTop bgColor={bgColor}>
        <GamingImageContainer bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}>
          <SiYoutubegaming size="24px" color="#ff0b37" />
        </GamingImageContainer>
        <GamingHeading textColor={isDarkTheme ? '#ffffff' : '#1e293b'}>
          Gaming
        </GamingHeading>
      </GamingTop>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => <LoaderView />

  renderGamingVideos = isDarkTheme => {
    const {gamingVideosList} = this.state

    return (
      <GamingVideoCardsContainer bgColor={isDarkTheme ? '#0f0f0f' : '#f1f5f9'}>
        {gamingVideosList.map(eachVideo => (
          <GameVideoLink to={`/videos/${eachVideo.id}`}>
            <GamingListItem key={eachVideo.id}>
              <GamingCard video={eachVideo} />
            </GamingListItem>
          </GameVideoLink>
        ))}
      </GamingVideoCardsContainer>
    )
  }

  renderGamingVideosView = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderGamingVideos(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'

          return (
            <GamingPage bgColor={bgColor}>
              <Header />
              <GamingVideosPageContainer>
                <NavigationBar />
                <GamingVideosContainer>
                  {this.renderGamingTopView(isDarkTheme)}
                  {this.renderGamingVideosView(isDarkTheme)}
                </GamingVideosContainer>
              </GamingVideosPageContainer>
            </GamingPage>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
