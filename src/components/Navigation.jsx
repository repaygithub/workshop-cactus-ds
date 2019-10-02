import React from 'react'
import cactus from '../assets/cactus-with-fill.svg'
import { Box, Flex, IconButton } from '@repay/cactus-web'
import { Link } from '@reach/router'
import { useFeatureFlags } from '@repay/cactus-fwk'

const NavLink = ({ children, to, className }) => (
  <Link to={to} children={children} className={className} />
)

const Navigation = ({ setLang }) => {
  const [allow_customer_login] = useFeatureFlags('allow_customer_login')

  return (
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
      <Flex ml="auto">
        <IconButton label="United States" onClick={() => setLang('en-US')}>
          🇺🇸
        </IconButton>
        <IconButton label="Canada" onClick={() => setLang('en-CA')}>
          🇨🇦
        </IconButton>
      </Flex>
      <Flex
        as={NavLink}
        to="/icons"
        color="white"
        padding={4}
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
      {allow_customer_login && (
        <Flex
          as={NavLink}
          to="/sign-in"
          color="white"
          padding={4}
          alignItems="center"
        >
          <span>Sign-in</span>
        </Flex>
      )}
    </Flex>
  )
}

export default Navigation
