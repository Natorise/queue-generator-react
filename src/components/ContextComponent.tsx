import React, { createContext, useState } from "react";

export type QueueType = {
  name: string;
  count: number;
};



export type ContextType = {queues: QueueType[], setQueues: React.Dispatch<React.SetStateAction<QueueType[]>>}

export let QueuesContext = createContext<ContextType>(null!);

const queuess = [
  {
    name: "rare",
    count: 20,
  },
  {
    name: "regional",
    count: 20,
  },
];

const ContextComponent = ({ children }: React.PropsWithChildren) => {
  const [queues, setQueues] = useState<QueueType[]>(queuess);

  return (
    <QueuesContext.Provider value={{ queues, setQueues }}>
      {children}
    </QueuesContext.Provider>
  );
};

export default ContextComponent;
