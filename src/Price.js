import React from 'react'
import { data } from './product'

function Price() {
  return (
    <div>
<p>{data[0].price}</p>
<p>{data[1].price}</p>
<p>{data[2].price}</p>


    </div>
  )
}

export default Price