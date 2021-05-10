import React from "react";

function App() {
  function handler() {
    console.log("Changed");
  }
  return (
    <div className="container">
      <h1>Hello </h1>
      <input onChange={handler} type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
