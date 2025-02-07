import React, { useContext, useState } from 'react'
import Queue from './Queue'
import { QueuesContext, QueueType } from './ContextComponent'

const Queues = () => {

  const {queues} = useContext(QueuesContext)

  return (
    <div>
      {queues.map((queue,index)=>
        <Queue queue={queue} index={index} />
      )}
      the thing to add another queue
    </div>
  )
}

export default Queues