import * as React from 'react'

import { AppContext, IAppContext } from './appContext'

export class AppContextProvider extends React.Component<
  { children: React.ReactNode },
  IAppContext
> {
  constructor(props) {
    super(props)
    this.state = {
      appName: 'true default app name',
      setAppName: this.setAppName
    }
  }

  setAppName = (name: string) => {
    this.setState({ appName: name })
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
