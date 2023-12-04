import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  overflow-y: auto;
`

export const TrendingVideosPageContainer = styled.div`
  height: 86.5vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const TrendingVideosContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`

export const TrendingTop = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: ${props => props.bgColor};
  height: 75px;
`

export const TrendingVideoCardsContainer = styled.ul`
  list-style: none;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 575px) {
    padding: 15px;
  }
`

export const TrendingImageContainer = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const TrendingHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 22px;
`
