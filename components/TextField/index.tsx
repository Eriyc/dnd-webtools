import { ChangeEvent } from 'react'
import { ErrorText, InputWrapper, StyledInput, Text } from './styles'

interface Props {
  className: string
  name: string
  value: string
  placeholder: string
  error: string
  hintText: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  id: string
  label: string
  autoComplete: string
  type: string
}

const TextField = (props: Partial<Props>) => {
  const { className, disabled, error, hintText, id, name, onChange, placeholder, value, label } = props
  return (
    <InputWrapper className={className}>
      <label>{label}</label>
      <StyledInput
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        autoComplete={props.autoComplete}
        type={props.type}
      />
      {hintText && <Text>{hintText}</Text>}
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}

export default TextField
