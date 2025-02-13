import React, { useContext, useState } from 'react'
import Queue from './Queue'
import { QueuesContext, QueueType } from './ContextComponent'

const Queues = () => {

  const {queues} = useContext(QueuesContext)

  return (
    <div className='queues'>
      {queues.map((queue,index)=>
        <Queue queue={queue} index={index} />
      )}
    </div>
  )
}

export default Queues