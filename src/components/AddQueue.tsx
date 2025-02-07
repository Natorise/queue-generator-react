import React, { useContext, useState } from 'react'
import { QueuesContext } from './ContextComponent'

const AddQueue = () => {
  const {queues,setQueues} = useContext(QueuesContext)

  const [ queueName, setQueueName ] = useState("")

  const addQueue = ()=>{
    const queuesClone = structuredClone(queues)


    const newQueue = {
      name:queueName,
      count:10
    }
    queuesClone.push(newQueue)
    setQueues(queuesClone)

    setQueueName("")
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "Enter") { 
      let nextElement = (e.target as HTMLInputElement).nextElementSibling as HTMLButtonElement

      nextElement.click()
    }
  }

  return (
    <div>
      <input type="text" placeholder='Queue Name' onChange={e=>{setQueueName(e.target.value)}} onKeyDown={onEnter} value={queueName}/>
      <button onClick={addQueue}>Add</button>
    </div>
  )
}

export default AddQueue