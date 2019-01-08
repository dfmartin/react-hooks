import * as React from 'react'

import { useContext, useState } from 'react'
import { AppContext } from './appContext'

interface Props {
  name: string
}

export const Two: React.StatelessComponent<Props> = (props: Props) => {
  const { name: nameProp } = props

  const [name, setName] = useState(nameProp)
  const appContext = useContext(AppContext)

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleAppNameChange = r => {
    appContext.setAppName(r.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <br />
      <span>name two: {name}</span>
      <br />
      <span>app name: {appContext.appName}</span>
      <br />
      <input value={appContext.appName} onChange={handleAppNameChange} />
    </div>
  )
}
