import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
height: 100px;
background: lightblue;
color: black;
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledLink = styled.a`
color: black;
padding: 0 rem 2 rem;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
          <Link href="/">
              <StyledLink>WebSiteCG</StyledLink>
          </Link>
      </div>
      <div>
      <Link href="/" passHref>
              <StyledLink>Home</StyledLink>
          </Link>
          <Link href="/about" passHref>
              <StyledLink>About</StyledLink>
          </Link><Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
          </Link>
          <Link href="/blog" passHref>
              <StyledLink>Blog</StyledLink>
          </Link>
      </div>
    </Nav>
  )
}

export default Navbar
