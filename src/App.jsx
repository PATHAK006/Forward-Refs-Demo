import React, { useRef } from "react";
import "./App.css";
import User from "./User";
function App() {
  let inputRef = useRef(null);
  let inputRefs = useRef()

  let updateContent = () => {
    inputRef.current.value = "Hello!!!!";
  };

  let updated = () => {
    inputRefs.current.focus()
    inputRefs.current.style.backgroundColor = "skyblue"
    inputRefs.current.style.color = "white"
    inputRefs.current.value = "jingalala"
  }

  return (
    <div className="App">
      <h1>Forward Refs</h1>
      <button onClick={updated}>Updated Refssss</button>
      <input type="text" ref={inputRefs} /><br /><br />
      <User ref={inputRef} />
      <button onClick={updateContent}>Update InputBox</button>
    </div>
  );
}

export default App;
