import { useState } from "react";
import "./App.css";
import RoadBlocks from "./Components/RoadBlocks";

function App() {
  const [showRoadblock, setShowRoadblock] = useState(true);
  return (
    <>
      {showRoadblock ? (
        <RoadBlocks onClose={() => setShowRoadblock(false)} />
      ) : (
        <div>Welcome</div>
      )}
    </>
  );
}

export default App;
