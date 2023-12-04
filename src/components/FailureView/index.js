import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureViewContainer bgColor={isDarkTheme ? '#212121' : '#f9f9f9'}>
            <FailureViewImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure"
            />
            <FailureViewHeading textColor={isDarkTheme ? '#ffffff' : '#181818'}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewText textColor={isDarkTheme ? '#d7dfe9' : '#64748b'}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewText>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
