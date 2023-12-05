import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayerContainer,
  ReactPlayerContainer,
  VideoDetailsContainer,
  PlayVideoTitle,
  ViewsAndButtonsContainer,
  ViewsContainer,
  ViewsText,
  ButtonsContainer,
  LikeButton,
  HorizontalLine,
  ChannelContainer,
  ChannelImage,
  ChannelNameContainer,
  ChannelName,
  DescriptionText,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, like, dislike, onClickLike, onClickDislike} = props

  const onClickLikeButton = () => {
    onClickLike()
  }

  const onClickDislikeButton = () => {
    onClickDislike()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {addVideo, isDarkTheme, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : textColor
        const {
          name,
          profileImageUrl,
          subscriberCount,
          description,

          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoDetails

        const publishedTime = formatDistanceToNow(new Date(publishedAt))
          .split(' ')
          .slice(1)
          .join(' ')

        const saveVideo = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayerContainer bgColor={isDarkTheme ? '#0f0f0f' : ' #f4f4f4'}>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} controls width="100%" />
              <VideoDetailsContainer>
                <PlayVideoTitle textColor={isDarkTheme ? '#ffffff' : '#212121'}>
                  {title}
                </PlayVideoTitle>

                <ViewsAndButtonsContainer>
                  <ViewsContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot color="#616e7c" size={25} />
                    <ViewsText>{publishedTime} ago</ViewsText>
                  </ViewsContainer>

                  <ButtonsContainer>
                    <LikeButton
                      type="button"
                      onClick={onClickLikeButton}
                      color={like ? '#2563eb' : '#64748b'}
                    >
                      <BiLike size={25} /> Like
                    </LikeButton>
                    <LikeButton
                      type="button"
                      onClick={onClickDislikeButton}
                      color={dislike ? '#2563eb' : '#64748b'}
                    >
                      <BiDislike size={25} /> Dislike
                    </LikeButton>
                    <LikeButton
                      type="button"
                      onClick={saveVideo}
                      color={isSaved ? '#2563eb' : '#64748b'}
                    >
                      <BiListPlus size={25} color={saveIconColor} />
                      {isSaved ? 'Saved' : 'Saved'}
                    </LikeButton>
                  </ButtonsContainer>
                </ViewsAndButtonsContainer>
                <HorizontalLine />
                <ChannelContainer>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <ChannelNameContainer>
                    <ChannelName
                      textColor={isDarkTheme ? '#ffffff' : '#212121'}
                    >
                      {name}
                    </ChannelName>
                    <ViewsText>{subscriberCount} subscribers</ViewsText>
                  </ChannelNameContainer>
                </ChannelContainer>
                <DescriptionText
                  textColor={isDarkTheme ? '#ffffff' : '#64748b'}
                >
                  {description}
                </DescriptionText>
              </VideoDetailsContainer>
            </ReactPlayerContainer>
          </VideoPlayerContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView
