import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router'
import App from './components/App'

import Home from './pages/Home'
import Icons from './pages/Icons'

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

ReactDom.render(
  <Router>
    <App path="*">
      <Home path="/" />
      <Icons path="/icons" />
    </App>
  </Router>,
  appRoot
)
