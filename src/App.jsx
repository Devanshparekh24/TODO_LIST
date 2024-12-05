import { useState } from "react";
import TODOList from "./Component/TODOList";
import TO from "./Component/TO";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="px-5 py-10
     flex items-center justify-center min-h-screen bg-blue-600"
      >
        <TODOList />
        {/* <TO/> */}
      </div>
    </>
  );
}

export default App;
