import styled from 'styled-components'
import { lighten } from 'polished'
import { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${lighten(0.07, '#121212')};
  justify-content: space-between;
  padding: 0 calc((100vw - 1170px) / 2);
  & > ul {
    margin: 0;
    display: flex;
    flex-direction: row;
  }
`

export const StyledLogo = styled.h1``

const LinkElement = (props: PropsWithChildren<LinkProps> & { className?: string }) => {
  const router = useRouter()

  const navigate = () => {
    router.push(props.href)
  }

  const style = {
    backgroundColor: router.pathname === props.href ? lighten(0.14, '#121212') : 'unset',
  }

  return (
    <li className={props.className} onClick={navigate} style={style}>
      {props.children}
    </li>
  )
}

export const StyledNavLink = styled(LinkElement)`
  height: 4em;
  line-height: calc(4em - 8px);
  margin: 0 4px;
  background-color: red;
  list-style: none;
  padding: 4px 8px;

  cursor: pointer;
`
