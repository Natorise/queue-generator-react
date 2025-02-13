import { useContext } from "react";
import Queue from "./Queue";
import { QueuesContext } from "./ContextComponent";

const Queues = () => {
  const { queues } = useContext(QueuesContext);

  return (
    <div className="queues">
      {queues.map((queue, index) => (
        <Queue queue={queue} index={index} />
      ))}
    </div>
  );
};

export default Queues;
