import React from 'react'
import { StyleProvider, Box, Flex } from '@repay/cactus-web'
import cactus from '../assets/cactus-with-fill.svg'

export const App = ({ children }) => (
  <StyleProvider global>
    <Flex as="nav" justifyContent="start" width="100vw" colors="base">
      <Flex as="a" href="/" alignItems="center" padding={4} color="white">
        <Box
          as="img"
          src={cactus}
          alt="cactus with a cowboy hat"
          height="40px"
        />{' '}
        <span>Cactus Design System</span>
      </Flex>
    </Flex>
    <Box mx="auto" maxWidth={['92vw', '90vw', '980px']}>
      {children}
    </Box>
  </StyleProvider>
)

export default App
