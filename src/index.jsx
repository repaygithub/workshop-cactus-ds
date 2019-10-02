import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router'
import App from './components/App'

import Home from './pages/Home'

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

ReactDom.render(
  <App path="*">
    <Router>
      <Home path="/" />
    </Router>
  </App>,
  appRoot
)
