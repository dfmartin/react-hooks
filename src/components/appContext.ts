import * as React from 'react'

export interface IAppContext {
  appName: string
  setAppName: (name: string) => void
}

export const AppContext = React.createContext({} as IAppContext)
