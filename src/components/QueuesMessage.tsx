import React, { useContext } from 'react'
import { QueuesContext, QueueType } from './ContextComponent'

const QueuesMessage = () => {
  const { queues } = useContext(QueuesContext)
  console.log(queues)
  return (
    <div>
      {queues.reduce((a,b)=>a+b.count,0)} total incenses <br /><br />
      
      {formatQueues(queues).map(x=>
        <p>{x}</p>
      )}
    </div>
  )
}

export default QueuesMessage

const shardPrice = 200
const incenseShardPrice = 50
const incensePrice = incenseShardPrice * shardPrice


function formatQueues(queues: QueueType[]) {
  let incenseSum = 0
  
  let queueStrings = [] 
  for(let queue of queues) {
    queueStrings.push(formatQueue(queue, incenseSum))
    incenseSum+= queue.count
  }

  return queueStrings
}
 
function formatQueue(queue: QueueType, incenseOffset: number) {
  return `**${queue.name} : ${queue.count * incensePrice} (${queue.count * incenseShardPrice} shards) - Channels #${incenseOffset+ 1} to #${incenseOffset + queue.count}**`
}