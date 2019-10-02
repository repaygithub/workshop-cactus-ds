import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router'
import App from './components/App'

import Home from './pages/Home'
import Icons from './pages/Icons'
import NotFound from './pages/NotFound'
import { UIConfigPage } from './pages/UIConfig'
import UIConfigStore from './stores/UIConfigStore'

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

const initialUIConfig = {
  app_name: 'Cactus Design System',
  select_color: 'default',
  use_cactus_styles: true,
  allow_customer_login: false,
  terms_1: '',
  terms_2: '',
  terms_3: '',
  terms_4: ''
}

ReactDom.render(
  <UIConfigStore initialValue={initialUIConfig}>
    <Router>
      <App path="/">
        <Home path="/" />
        <Icons path="icons" />
        <UIConfigPage path="ui-config" />
        <NotFound default />
      </App>
    </Router>
  </UIConfigStore>,
  appRoot
)
