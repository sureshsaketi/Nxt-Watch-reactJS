import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import TrendingVideoCard from '../TrendingVideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingPageContainer,
  TrendingVideosPageContainer,
  TrendingVideoCardsContainer,
  TrendingVideosContainer,
  TrendingTop,
  TrendingImageContainer,
  TrendingHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  formattedData = eachVideo => ({
    name: eachVideo.channel.name,
    profileImageUrl: eachVideo.channel.profile_image_url,
    id: eachVideo.id,
    publishedAt: eachVideo.published_at,
    thumbnailUrl: eachVideo.thumbnail_url,
    title: eachVideo.title,
    viewCount: eachVideo.view_count,
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const fetchedTrendingVideos = fetchedData.videos

      const updatedFetchedData = fetchedTrendingVideos.map(eachVideo =>
        this.formattedData(eachVideo),
      )
      this.setState({
        trendingVideosList: updatedFetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingTopView = isDarkTheme => {
    const bgColor = isDarkTheme ? '#181818' : '#ebebeb'

    return (
      <TrendingTop bgColor={bgColor}>
        <TrendingImageContainer bgColor={isDarkTheme ? '#0f0f0f' : '#e2e8f0'}>
          <HiFire size="24px" color="#ff0000" />
        </TrendingImageContainer>
        <TrendingHeading textColor={isDarkTheme ? '#ffffff' : '#1e293b'}>
          Trending
        </TrendingHeading>
      </TrendingTop>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => <LoaderView />

  renderTrendingVideoCards = isDarkTheme => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideoCardsContainer
        bgColor={isDarkTheme ? '#0f0f0f' : '#f1f5f9'}
      >
        {trendingVideosList.map(eachVideo => (
          <TrendingVideoCard video={eachVideo} key={eachVideo.name} />
        ))}
      </TrendingVideoCardsContainer>
    )
  }

  renderTrendingVideosView = isDarkTheme => {
    const {apiStatus} = this.state
    // console.log(trendingVideosList)

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderTrendingVideoCards(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView()
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
            <TrendingPageContainer bgColor={bgColor} data-testid="trending">
              <Header />
              <TrendingVideosPageContainer
                bgColor={isDarkTheme ? '#181818' : null}
              >
                <NavigationBar />
                <TrendingVideosContainer>
                  {this.renderTrendingTopView(isDarkTheme)}
                  {this.renderTrendingVideosView(isDarkTheme)}
                </TrendingVideosContainer>
              </TrendingVideosPageContainer>
            </TrendingPageContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingVideos
