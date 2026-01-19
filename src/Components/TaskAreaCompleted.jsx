import "../Stylesheets/TaskAreaCompleted.css";
import { useEffect, useRef } from "react";

export default function TaskAreaCompleted({ doneTaskItems, setDoneTaskItems }) {
  const listEndRef = useRef(null);
  const prevItemsCount = useRef(doneTaskItems.length);

  function handleDeleteAll() {
    setDoneTaskItems([]);
  }

  function handleDelCompItemButton(indexToDelete) {
    setDoneTaskItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  }

  useEffect(() => {
    if (doneTaskItems.length > prevItemsCount.current) {
      listEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevItemsCount.current = doneTaskItems.length;
  }, [doneTaskItems.length]);

  useEffect(() => {
    listEndRef.current?.scrollIntoView();
  }, []);

  return (
    <div className="completed-big-container">
      {doneTaskItems.length > 0 && (
        <button onClick={handleDeleteAll} className="delete-all">
          Delete All
        </button>
      )}

      <div className="completed-task-items-wrapper">
        {doneTaskItems.length === 0 ? (
          <h1>NO TASKS COMPLETED YET</h1>
        ) : (
          <ol className="completed-ol">
            {doneTaskItems.map((item, index) => (
              <li key={index} className="completed-task-card-wrapper">
                <div className="completed-task-card">
                  <div className="item-time-container">
                    <p style={{ marginTop: "0px", marginBottom: "2px" }}>
                      {item.text}
                    </p>
                    <small style={{ fontSize: "10px" }}>
                      Completed on: {item.time}
                    </small>
                  </div>
                  <button
                    onClick={() => handleDelCompItemButton(index)}
                    className="delete-completed-item"
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </li>
            ))}
          </ol>
        )}
        <div ref={listEndRef} />
      </div>
    </div>
  );
}
