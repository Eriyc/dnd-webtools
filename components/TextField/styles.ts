import styled from 'styled-components'

const Text = styled.text``

const ErrorText = styled(Text)`
  color: red;
`

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 0px;
  border: 1px solid gray;
  width: calc(16rem);

  &:focus {
    outline: none;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  max-width: 16rem;
`

export { StyledInput, ErrorText, Text, InputWrapper }
