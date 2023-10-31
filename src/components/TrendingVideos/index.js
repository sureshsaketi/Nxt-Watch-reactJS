import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import {
  TrendingVideosPageContainer,
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

  renderTrendingTopView = () => (
    <TrendingTop>
      <TrendingImageContainer>
        <HiFire size="24px" color="#ff0000" />
      </TrendingImageContainer>
      <TrendingHeading>Trending</TrendingHeading>
    </TrendingTop>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => <LoaderView />

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    // return this.renderFailureView()
    return this.renderLoaderView()
  }

  render() {
    return (
      <>
        <Header />
        <TrendingVideosPageContainer>
          <NavigationBar />
          <TrendingVideosContainer>
            {this.renderTrendingTopView()}
            {this.renderTrendingVideosView()}
          </TrendingVideosContainer>
        </TrendingVideosPageContainer>
      </>
    )
  }
}

export default TrendingVideos
