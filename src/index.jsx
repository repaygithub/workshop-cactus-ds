import React from 'react'
import ReactDom from 'react-dom'

const App = () => <div>Hello World</div>

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

ReactDom.render(<App />, appRoot)
