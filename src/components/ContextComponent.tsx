import React, { createContext, useEffect, useState } from "react";

export type QueueType = {
  name: string;
  count: number;
};

export type ContextType = {
  queues: QueueType[];
  setQueues: React.Dispatch<React.SetStateAction<QueueType[]>>;
};

export let QueuesContext = createContext<ContextType>(null!);

let queuess = [
  {
    name: "Rares",
    count: 30,
  },
  {
    name: "Regionals",
    count: 18,
  },
  {
    name: "Gmax",
    count: 18,
  },
  {
    name: "Reserve 1",
    count: 8,
  },
  {
    name: "Reserve 2",
    count: 8,
  },
  {
    name: "Reserve 3",
    count: 8,
  },
  {
    name: "Eeveelutions",
    count: 10,
  },
];

// if not localstorage use default
const queuesLocalStorage = localStorage.getItem("queues");
if (queuesLocalStorage) queuess = JSON.parse(queuesLocalStorage);

const ContextComponent = ({ children }: React.PropsWithChildren) => {
  const [queues, setQueues] = useState<QueueType[]>(queuess);

  useEffect(() => {
    localStorage.setItem("queues", JSON.stringify(queues));
  }, [queues]);

  return (
    <QueuesContext.Provider value={{ queues, setQueues }}>
      {children}
    </QueuesContext.Provider>
  );
};

export default ContextComponent;
