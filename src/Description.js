import React from 'react'
import { data } from './product'

function Description() {
  return (
    <div>
<p>{data[0].description}</p>
<p>{data[1].description}</p>
<p>{data[2].description}</p>



    </div>
  )
}

export default Description