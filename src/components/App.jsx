import React from 'react'
import { Alert, StyleProvider, Box } from '@repay/cactus-web'
import ScrollManager from './ScrollManager'
import AppRoot from '@repay/cactus-fwk'
import NotFound from '../pages/NotFound'
import PropTypes from 'prop-types'
import { useUIConfig } from '../stores/UIConfigStore'
import Navigation from './Navigation'

// Fix incorrect AppRoot.propTypes
AppRoot.propTypes.globalErrorView = PropTypes.elementType

const GlobalErrorView = ({ error, info }) => {
  return (
    <Box padding={7}>
      <Alert status="error" mb={5}>
        {error.message}
      </Alert>
      <NotFound />
      <pre>{info.componentStack}</pre>
      <pre>{error.stack}</pre>
    </Box>
  )
}

export const App = ({ children }) => {
  const {
    uiConfig: { use_cactus_styles, allow_customer_login }
  } = useUIConfig()

  const featureFlags = {
    use_cactus_styles,
    allow_customer_login,
    __dev__: process.env.NODE_ENV !== 'production'
  }

  return (
    <StyleProvider global={use_cactus_styles}>
      <AppRoot globalErrorView={GlobalErrorView} featureFlags={featureFlags}>
        <ScrollManager />
        <Navigation />
        <Box mx="auto" maxWidth={['92vw', '90vw', '980px']}>
          {children}
        </Box>
      </AppRoot>
    </StyleProvider>
  )
}

export default App
