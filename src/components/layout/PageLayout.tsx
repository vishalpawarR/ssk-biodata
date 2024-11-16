import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import styled from "styled-components"

const MainContainer = styled.main`
display: flex
  flex-grow: 1;
`

function PageLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default PageLayout
