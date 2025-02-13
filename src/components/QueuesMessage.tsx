import React, { useContext, useState } from "react";
import { QueuesContext, QueueType } from "./ContextComponent";
import { Copy, Check } from "react-bootstrap-icons";

const QueuesMessage = () => {

  const [copied,setCopied] = useState(false)

  const { queues } = useContext(QueuesContext);
  console.log(queues);

  const copyText = (e: React.MouseEvent) => {
    let divValue = (e.currentTarget as HTMLDivElement).innerText;

    // remove extra \n
    divValue = divValue
      .split("\n")
      .filter((x) => x)
      .join("\n");

    navigator.clipboard.writeText(divValue);
    setCopied(true)

    setTimeout(()=>setCopied(false),1000)
  };
  return (
    <div className="queues-message">
      <p>{queues.reduce((a, b) => a + b.count, 0)} Total Incenses</p>
      &nbsp;
      <div onClick={copyText}>
        {formatQueues(queues).map((x) => (
          <p>{x}</p>
        ))}

        <div className="copy">
          {copied ?           <Check color="green" size={25} />
:           <Copy color="lightgray" size={25} />
}
        </div>
      </div>
    </div>
  );
};

export default QueuesMessage;

const shardPrice = 200;
const incenseShardPrice = 50;
const incensePrice = incenseShardPrice * shardPrice;

function formatQueues(queues: QueueType[]) {
  let incenseSum = 0;

  let queueStrings = [];
  for (let queue of queues) {
    queueStrings.push(formatQueue(queue, incenseSum));
    incenseSum += queue.count;
  }

  return queueStrings;
}

function formatQueue(queue: QueueType, incenseOffset: number) {
  return `**${queue.name} : ${formatPrice(queue.count * incensePrice)} (${
    queue.count * incenseShardPrice
  } shards) - Channels #${incenseOffset + 1} to #${
    incenseOffset + queue.count
  }**`;
}

function formatPrice(price: number) {
  let formatted = String(price);
  if (formatted.length >= 7) formatted = formatted.slice(0, -6) + "M";
  else if (formatted.length >= 4) formatted = formatted.slice(0, -3) + "K";

  return formatted;
}
