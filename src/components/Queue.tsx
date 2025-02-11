import React, { useContext } from 'react'


import { QueuesContext, QueueType } from './ContextComponent'







const Queue = ({ queue, index }: { queue: QueueType, index: number }) => {

  const {queues,setQueues} = useContext(QueuesContext)

  const updateName = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const queuesClone = structuredClone(queues)
    queuesClone[index].name = e.target.value

    setQueues(queuesClone)    
  }

  const updateCount = (e: React.ChangeEvent<HTMLInputElement>)=>{

    const queuesClone = structuredClone(queues)
    queuesClone[index].count = parseInt(e.target.value)

    setQueues(queuesClone)    

  }

  const deleteQueue = ()=>{
    const newQueues = queues.filter((_,i)=>i !== index)

    setQueues(newQueues)
  }

  return (
    <div className='queue'>

    <input type="text" value={queue.name} onChange={updateName} placeholder='Queue Name' />
    <input type="range" min="1" max="100" value={queue.count} onChange={updateCount} />
    <button onClick={deleteQueue}>Delete</button>
    </div>
  )
}

export default Queue