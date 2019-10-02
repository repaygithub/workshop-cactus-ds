import React, { createContext, useState, useContext } from 'react'

const UIConfigContext = createContext({ uiConfig: null })

export const useUIConfig = () => useContext(UIConfigContext)

export const WithUIConfig = Comp => props => (
  <UIConfigContext.Consumer>
    {uiConfigState => <Comp {...props} {...uiConfigState} />}
  </UIConfigContext.Consumer>
)

export const UIConfigStore = ({ initialValue, children }) => {
  const [uiConfig, setUIConfig] = useState(initialValue)

  return (
    <UIConfigContext.Provider value={{ uiConfig, setUIConfig }}>
      <>{children}</>
    </UIConfigContext.Provider>
  )
}

export default UIConfigStore
