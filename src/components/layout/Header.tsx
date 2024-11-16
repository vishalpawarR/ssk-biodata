import styled from "styled-components"

const HeaderContainer = styled.header`
  height: 100px;
`

const Nav = styled.nav`
  display: flex;
`

function Header() {
  return (
    <HeaderContainer>
      <Nav />
      Header
    </HeaderContainer>
  )
}

export default Header
