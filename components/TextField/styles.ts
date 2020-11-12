import styled from 'styled-components'

const Text = styled.text``

const ErrorText = styled(Text)`
  color: red;
`

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 0px;
  border: 1px solid gray;

  &:focus {
    outline: none;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16rem;
  padding: 8px;
`

export { StyledInput, ErrorText, Text, InputWrapper }
