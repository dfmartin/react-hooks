import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContextProvider } from './components/appContextProvider'
import Hello from './Hello'
import './styles.css'

interface AppProps {}
interface AppState {
  name: string
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React'
    }
  }

  render() {
    return (
      <AppContextProvider>
        <div>
          <Hello name={this.state.name} />
        </div>
      </AppContextProvider>
    )
  }
}

render(<App />, document.getElementById('root'))
