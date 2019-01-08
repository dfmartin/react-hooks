import * as React from 'react'

import { useContext, useState } from 'react'
import { AppContext } from './appContext'

interface Props {
  name: string
}

export const One: React.StatelessComponent<Props> = (props: Props) => {
  const { name: nameProp } = props

  const [name, setName] = useState(nameProp)
  const appContext = useContext(AppContext)

  const handleNameChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <br />
      <span>name one: {name}</span>
      <br />
      <span>app name: {appContext.appName}</span>
    </div>
  )
}
