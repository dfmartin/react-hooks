import React from 'react'

import { One } from './components/one'
import { Two } from './components/two'

export default ({ name }) => (
  <React.Fragment>
    <div>
      <One name="original" />
    </div>
    <br />
    <div>
      <Two name="original" />
    </div>
  </React.Fragment>
)
