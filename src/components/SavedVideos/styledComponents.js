import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosPage = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  overflow-y: auto;
`
export const SavedVideosPageContainer = styled.div`
  height: 86.5vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SavedVideosContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 575px) {
    &::-webkit-scrollbar {
      width: 10px; /* Width of the scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background: #888; /* Color of the thumb */
      border-radius: 5px; /* Roundness of the thumb */
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1; /* Color of the track */
    }
  }
`

export const SavedVideosTop = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  height: 75px;
`

export const SavedVideosCardsContainer = styled.ul`
  background-color: ${props => props.bgColor};
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  @media screen and (min-width: 575px) {
    padding: 40px;
    justify-content: start;
  }
`

export const SavedVideosImageContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SavedVideosHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 22px;
`

export const SavedVideosLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const SavedVideosListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: 180px;
  }
`
export const NoSavedVideos = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: ${props => props.bgColor};
`

export const NoSavedVideosImage = styled.img`
  width: 300px;
`
export const NoSavedVideosHeading = styled(SavedVideosHeading)`
  text-align: center;
`
export const NoSavedVideosText = styled.p`
  color: ${props => props.textColor};
  font-family: 'roboto';
  text-align: center;
  font-font: weight 400;
`
