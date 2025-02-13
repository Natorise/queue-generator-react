import "./App.css";
import "./range-input.css";
import Queues from "./components/Queues";

import ContextComponent from "./components/ContextComponent";
import QueuesMessage from "./components/QueuesMessage";
import AddQueue from "./components/AddQueue";

function App() {
  return (
    <>
      <ContextComponent>
      <p className="title">
              <strong>Queue Generator</strong>
            </p>

        <div className="page-content">
          <div className="left">
            <AddQueue />
            <Queues />
          </div>
          <QueuesMessage />
        </div>
      </ContextComponent>
    </>
  );
}

export default App;
