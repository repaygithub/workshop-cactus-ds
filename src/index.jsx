import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router'
import App from './components/App'

import Home from './pages/Home'
import Icons from './pages/Icons'
import NotFound from './pages/NotFound'
import { UIConfigPage } from './pages/UIConfig'

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

ReactDom.render(
  <Router>
    <App path="/">
      <Home path="/" />
      <Icons path="icons" />
      <UIConfigPage path="ui-config" />
      <NotFound default />
    </App>
  </Router>,
  appRoot
)
