import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {GamingCardImage, GameTitle, GameViewCount} from './styledComponents'

const GamingCard = props => {
  const {video} = props
  const {thumbnailUrl, title, viewCount} = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <GamingCardImage src={thumbnailUrl} alt="video thumbnail" />
            <GameTitle textColor={isDarkTheme ? '#ffffff' : '#181818'}>
              {title}
            </GameTitle>
            <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default GamingCard
