import styled from 'styled-components'

export const NotFoundPage = styled.div`
  height: 100%;
  background-color: ${props => props.bgColor};
`

export const NotFoundPageContainer = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
`

export const NotFoundImage = styled.img`
  width: 300px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'roboto';
  font-size: 32px;
  text-align: center;
  font-weight: 400;
`
export const NotFoundText = styled.p`
  color: ${props => props.textColor};
  font-family: 'roboto';
  text-align: center;
  font-weight: 500;
`
