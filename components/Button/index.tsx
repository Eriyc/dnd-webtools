import styled from 'styled-components'

const Button = styled.button`
  width: 16rem;
  padding: 8px;
  background-color: #d8d878;
  color: #000;
  border: none;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    filter: brightness(115%);
  }
`

export default Button
