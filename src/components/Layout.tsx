import { Container, Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from 'components'

const Layout = () => {
  return (
    <Container maxW="100%" h="100vh" p={0}>
      <Grid h="100%" templateRows="auto 1fr" templateColumns="70px 1fr">
        <Header />
        <Sidebar />
        <Outlet />
      </Grid>
    </Container>
  )
}

export default Layout
