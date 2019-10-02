import React from 'react'
import { StyleProvider, Box, Flex } from '@repay/cactus-web'
import { Link } from '@reach/router'
import cactus from '../assets/cactus-with-fill.svg'
import ScrollManager from './ScrollManager'

const NavLink = ({ children, to, className }) => (
  <Link to={to} children={children} className={className} />
)

export const App = ({ children }) => (
  <StyleProvider global>
    <ScrollManager />
    <Flex as="nav" justifyContent="start" width="100vw" colors="base">
      <Flex as={NavLink} to="/" alignItems="center" padding={4} color="white">
        <Box
          as="img"
          src={cactus}
          alt="cactus with a cowboy hat"
          height="40px"
        />{' '}
        <span>Cactus Design System</span>
      </Flex>
      <Flex
        as={NavLink}
        to="/icons"
        color="white"
        padding={4}
        ml="auto"
        alignItems="center"
      >
        <span>Icons</span>
      </Flex>
      <Flex
        as={NavLink}
        to="/ui-config"
        color="white"
        padding={4}
        alignItems="center"
      >
        <span>UI Config</span>
      </Flex>
      <Flex
        as={NavLink}
        to="/not-found"
        color="white"
        padding={4}
        alignItems="center"
      >
        <span>404</span>
      </Flex>
    </Flex>
    <Box mx="auto" maxWidth={['92vw', '90vw', '980px']}>
      {children}
    </Box>
  </StyleProvider>
)

export default App
