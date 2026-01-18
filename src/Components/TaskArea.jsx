import { useState } from "react";
import "../Stylesheets/TaskArea.css";
import TaskAreaAll from "./TaskAreaOpen";
import TaskAreaCompleted from "./TaskAreaCompleted";
import TaskAreaOpen from "./TaskAreaOpen";

export default function TaskArea({
  taskItems,
  setTaskItems,
  activeTab,
  setActiveTab,
  doneTaskItems,
  setDoneTaskItems,
}) {
  return (
    <>
      <div className="task-area-container">
        {activeTab === "open" ? (
          <TaskAreaAll
            taskItems={taskItems}
            setTaskItems={setTaskItems}
            doneTaskItems={doneTaskItems}
            setDoneTaskItems={setDoneTaskItems}
          />
        ) : activeTab === "completed" ? (
          <TaskAreaCompleted
            doneTaskItems={doneTaskItems}
            setDoneTaskItems={setDoneTaskItems}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
