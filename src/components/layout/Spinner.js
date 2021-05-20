import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinnner = () => {
  return(
    <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200ox', margin: 'auto', display: 'block' }}/>
    </Fragment>
  )
}


export default Spinnner