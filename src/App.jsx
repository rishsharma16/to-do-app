import { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./Components/InputArea";

function App() {
  const [taskItems, setTaskItems] = useState(() => {
    const saved = localStorage.getItem("taskItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [doneTaskItems, setDoneTaskItems] = useState(() => {
    const saved = localStorage.getItem("doneTaskItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
  }, [taskItems]);

  useEffect(() => {
    localStorage.setItem("doneTaskItems", JSON.stringify(doneTaskItems));
  }, [doneTaskItems]);

  return (
    <div className="App">
      <h1> TO-DO APP!!!</h1>
      <InputArea
        taskItems={taskItems}
        setTaskItems={setTaskItems}
        doneTaskItems={doneTaskItems}
        setDoneTaskItems={setDoneTaskItems}
      />
    </div>
  );
}

export default App;
