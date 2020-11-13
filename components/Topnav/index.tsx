import { StyledLogo, StyledNav, StyledNavLink } from './styles'

const Topnav = () => {
  return (
    <StyledNav>
      <StyledLogo>DND-WEBTOOLS</StyledLogo>
      <ul>
        <StyledNavLink href="/">Home</StyledNavLink>
        <StyledNavLink href="/account">Account</StyledNavLink>
      </ul>
    </StyledNav>
  )
}

export default Topnav
