import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
    </div>
  );
}
export default App;
