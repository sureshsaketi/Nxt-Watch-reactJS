import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideosListItem,
  ThumbnailImage,
  VideoCardDetailsContainer,
  ProfileImageContainer,
  ProfileImage,
  DetailsContainer,
  TitleText,
  ChannelNameText,
  ChannelNameTextLarge,
  ViewsCountAndPublishedContainer,
  ViewsCountText,
  PublishedAtText,
  LinkItem,
} from './styledComponents'

const VideoCard = props => {
  const {video} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = video
  const publishedTime = formatDistanceToNow(new Date(publishedAt))
    .split(' ')
    .slice(1)
    .join(' ')

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkItem to={`/videos/${id}`}>
            <VideosListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardDetailsContainer>
                <ProfileImageContainer>
                  <ProfileImage src={profileImageUrl} alt={name} />
                </ProfileImageContainer>

                <DetailsContainer>
                  <TitleText textColor={isDarkTheme ? '#ffffff' : '#0f0f0f'}>
                    {title}
                  </TitleText>
                  <ChannelNameTextLarge
                    textColor={isDarkTheme ? '#cbd5e1' : '#7e858e'}
                  >
                    {name}
                  </ChannelNameTextLarge>
                  <ViewsCountAndPublishedContainer>
                    <ChannelNameText
                      textColor={isDarkTheme ? '#cbd5e1' : '#7e858e'}
                    >
                      {name}
                    </ChannelNameText>
                    <ViewsCountText
                      textColor={isDarkTheme ? '#cbd5e1' : '#7e858e'}
                    >
                      {viewCount} views
                    </ViewsCountText>
                    <PublishedAtText
                      textColor={isDarkTheme ? '#cbd5e1' : '#7e858e'}
                    >
                      <BsDot color="#616e7c" size={25} />
                      {publishedTime} ago
                    </PublishedAtText>
                  </ViewsCountAndPublishedContainer>
                </DetailsContainer>
              </VideoCardDetailsContainer>
            </VideosListItem>
          </LinkItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoCard
