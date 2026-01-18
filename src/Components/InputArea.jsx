import { useState, useEffect, useRef } from "react";
import "../Stylesheets/InputArea.css";
import TabNav from "./TabNav";
import TaskArea from "./TaskArea";

export default function InputArea({
  taskItems,
  setTaskItems,
  doneTaskItems,
  setDoneTaskItems,
}) {
  const [task, setTask] = useState("");
  const [activeTab, setActiveTab] = useState("open");
  const [errorMessage, setErrorMessage] = useState("");
  const [popFlag, setPopFlag] = useState(false);

  function handleTaskInput(e) {
    setTask(e.target.value);
    setErrorMessage("");
  }

  function handleAddTaskButton() {
    if (!task.trim()) {
      setErrorMessage("No Value Entered. Enter Something");
      return;
    }
    setTaskItems((prevItems) => [...prevItems, task]);
    setTask("");
    setPopFlag(true);
    setActiveTab("open");

    setTimeout(() => {
      setPopFlag(false);
    }, 300);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTaskButton();
    }
  };

  return (
    <>
      <div className="input-area-wrapper">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            className="task-input"
            placeholder="Enter a new task here..."
            type="text"
            onChange={handleTaskInput}
            onKeyDown={handleKeyDown}
            value={task}
          />
          <button onClick={handleAddTaskButton} className="add-task-button">
            ADD TASK
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30px",
            margin: "0px",
          }}
        >
          {popFlag && (
            <p
              style={{
                display: "inline",
                marginTop: "0px",
                marginBottom: "0px",
                borderRadius: "10px",
                border: "1px solid transparent",
                width: "50px",
                backgroundColor: "wheat",
                color: "green",
              }}
            >
              Added
            </p>
          )}

          {errorMessage && (
            <p
              style={{
                display: "inline",
                marginTop: "0px",
                marginBottom: "0px",
                color: "white",
                fontSize: "14px",
              }}
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>

      <TabNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        taskItems={taskItems}
        doneTaskItems={doneTaskItems}
      />
      <TaskArea
        taskItems={taskItems}
        setTaskItems={setTaskItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        doneTaskItems={doneTaskItems}
        setDoneTaskItems={setDoneTaskItems}
      />
    </>
  );
}
