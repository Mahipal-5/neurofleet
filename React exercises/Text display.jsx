import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <h3>{text}</h3>
    </>
  );
}
export default App;
