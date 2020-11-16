import styled from 'styled-components'
import { lighten } from 'polished'

interface ContainerProps {
  padding?: number | string
  margin?: number | string
  height?: string
  background?: { elevation: number; color: string }
  maxWidth?: string
  fullWidth?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end'
}
const Container = styled.section<ContainerProps>`
  padding: ${(props) => (props.padding ? props.padding + 'px' : '16px')};
  background-color: ${(props) => (props.background ? lighten(props.background.elevation, props.background.color) : lighten(0.07, '#121212'))};
  margin: ${(props) => (props.margin ? props.margin + 'px' : '8px')};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  display: flex;
  justify-content: ${(props) => props.alignItems || 'flex-start'};
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: ${(props) => props.height};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export default Container
