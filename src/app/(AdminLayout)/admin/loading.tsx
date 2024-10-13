import { Spinner } from '@nextui-org/spinner'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient'>
      <Spinner size='lg'/>
    </div>
  )
}

export default loading