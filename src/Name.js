import React from 'react'
import { data } from './product'
function Name() {
  return (
    <div>
<p>{data[0].name}</p>
<p>{data[1].name}</p>
<p>{data[2].name}</p>
    </div>
  )
}

export default Name