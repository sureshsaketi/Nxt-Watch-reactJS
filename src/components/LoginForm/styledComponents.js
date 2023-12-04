import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
`
export const FormContainer = styled.form`
  background-color: ${props => props.bgColor};
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(7, 7, 7, 0.08);
`
export const NxtWatchImage = styled.img`
  height: 32px;
  align-self: center;
  margin-bottom: 32px;
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const LabelElement = styled.label`
  color: ${props => props.textColor};
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'roboto';
  font-size: 14px;
`
export const InputElement = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 3px;
  padding-left: 8px;
  color: ${props => props.textColor};
  font-family: 'roboto';
  border: 1px ${props => props.borderColor} solid;
  outline: none;
  margin-top: 5px;
  font-size: 16px;
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 6px;
`
export const PasswordCheckBox = styled.input`
  width: 16px;
  height: 16px;
`

export const ShowPasswordText = styled(LabelElement)`
  color: ${props => props.textColor};
  font-family: 'roboto';
  font-weight: 400;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  text-transform: capitalize;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  width: 100%;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top: 15px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 16px;
`
export const ErrorMessageText = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 20px;
`
