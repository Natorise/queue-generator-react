import { useState } from "react";
import "./App.css";
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
        <AddQueue />
        {/* <div>200 incenses</div>  */}
        <Queues />
        <QueuesMessage />
      </ContextComponent>
    </>
  );
}

export default App;
