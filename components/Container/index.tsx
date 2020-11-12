import styled from 'styled-components'
import { lighten } from 'polished'

interface ContainerProps {
  padding?: number | string
  margin?: number | string
  height?: string
  background?: { elevation: number; color: string }
  maxWidth?: string
}
const Container = styled.section<ContainerProps>`
  padding: ${(props) => (props.padding ? props.padding + 'px' : '16px')};
  background-color: ${(props) => (props.background ? lighten(props.background.elevation, props.background.color) : lighten(0.07, '#121212'))};
  margin: ${(props) => (props.margin ? props.margin + 'px' : 'auto')};
  max-width: ${(props) => props.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: ${(props) => props.height};
`

export default Container
