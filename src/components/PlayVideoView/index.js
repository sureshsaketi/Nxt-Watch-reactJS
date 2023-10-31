import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

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

  const {
    name,
    profileImageUrl,
    subscriberCount,
    description,
    id,
    publishedAt,
    title,
    videoUrl,
    viewCount,
  } = videoDetails

  //   const publishedTime = formatDistanceToNow(new Date(publishedAt))
  //     .split(' ')
  //     .slice(1)
  //     .join(' ')

  return (
    <VideoPlayerContainer>
      <ReactPlayerContainer>
        <ReactPlayer url={videoUrl} controls width="100%" />
        <VideoDetailsContainer>
          <PlayVideoTitle>{title}</PlayVideoTitle>

          <ViewsAndButtonsContainer>
            <ViewsContainer>
              <ViewsText>{viewCount} views</ViewsText>
              <BsDot color="#616e7c" size={25} />
              <ViewsText>{publishedAt} ago</ViewsText>
            </ViewsContainer>

            <ButtonsContainer>
              <LikeButton
                type="button"
                onClick={onClickLikeButton}
                color={like ? '#00306e' : null}
              >
                <BiLike size={25} /> Like
              </LikeButton>
              <LikeButton
                type="button"
                onClick={onClickDislikeButton}
                color={dislike ? '#00306e' : null}
              >
                <BiDislike size={25} /> Dislike
              </LikeButton>
              <LikeButton type="button">
                <BiListPlus size={25} /> Save
              </LikeButton>
            </ButtonsContainer>
          </ViewsAndButtonsContainer>
          <HorizontalLine />
          <ChannelContainer>
            <ChannelImage src={profileImageUrl} alt="channel" />
            <ChannelNameContainer>
              <ChannelName>{name}</ChannelName>
              <ViewsText>{subscriberCount} subscribers</ViewsText>
            </ChannelNameContainer>
          </ChannelContainer>
          <DescriptionText>{description}</DescriptionText>
        </VideoDetailsContainer>
      </ReactPlayerContainer>
    </VideoPlayerContainer>
  )
}
export default PlayVideoView
