import { useEffect, useState, useRef } from "react";
import "../Stylesheets/TaskAreaOpen.css";

export default function TaskAreaAll({
  taskItems,
  setTaskItems,
  doneTaskItems,
  setDoneTaskItems,
}) {
  const listEndRef = useRef(null);
  const prevItemsCount = useRef(taskItems.length);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [taskItems]);

  function handleEditClick(index, currentText) {
    setEditingIndex(index);
    setEditText(currentText);
  }

  function handleSaveEdit(index) {
    const updatedTasks = [...taskItems];
    updatedTasks[index] = editText;
    setTaskItems(updatedTasks);
    setEditingIndex(null);
  }

  function handleDeleteTaskButton(indexToDelete) {
    setTaskItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  }

  function handleDoneButton(indexDone) {
    const taskToMove = taskItems[indexDone];

    const completedAt = new Date().toLocaleString();
    setDoneTaskItems((prevDone) => [
      ...prevDone,
      { text: taskToMove, time: completedAt },
    ]);

    setTaskItems((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexDone)
    );
  }
  return (
    <>
      {taskItems.length === 0 ? (
        <h1>ADD TASK</h1>
      ) : (
        <ol className="task-ordered-list">
          {taskItems.map((taskItem, index) => (
            <li className="list-item-wrapper" key={index}>
              <div className="list-item-container">
                <div className="task-name-container">
                  {editingIndex === index ? (
                    <input
                      className="edit-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleSaveEdit(index)
                      }
                      autoFocus
                    />
                  ) : (
                    <span>{taskItem}</span>
                  )}
                </div>

                {editingIndex === index ? (
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="save-button"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(index, taskItem)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDoneButton(index)}
                  className="done-button"
                >
                  Done
                </button>
                <button
                  onClick={() => handleDeleteTaskButton(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
              <hr className="hr-below-list-item" />
            </li>
          ))}

          <div ref={listEndRef} style={{ float: "left", clear: "both" }} />
        </ol>
      )}
    </>
  );
}
