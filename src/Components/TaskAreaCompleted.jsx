import "../Stylesheets/TaskAreaCompleted.css";
import { useEffect, useRef } from "react";

export default function TaskAreaCompleted({ doneTaskItems, setDoneTaskItems }) {
  const listEndRef = useRef(null);

  function handleDeleteAll() {
    setDoneTaskItems([]);
  }

  function handleDelCompItemButton(indexToDelete) {
    setDoneTaskItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  }

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [doneTaskItems]);

  return (
    <>
      <div className="completed-big-container">
        {doneTaskItems.length > 1 ? (
          <button onClick={handleDeleteAll} className="delete-all">
            Delete All
          </button>
        ) : (
          ""
        )}
        <div className="completed-task-items-wrapper">
          {doneTaskItems.length === 0 ? (
            <h1>NOT TASK COMPLETED YET</h1>
          ) : (
            <ol>
              {doneTaskItems.map((item, index) => (
                <>
                  <div key={index} className="completed-task-card">
                    <div className="item-time-container">
                      <li>
                        <p style={{ marginTop: "0px", marginBottom: "2px" }}>
                          {item.text}
                        </p>
                        <small style={{ fontSize: "10px" }}>
                          Completed on: {item.time}
                        </small>
                      </li>
                    </div>
                    <button
                      onClick={() => handleDelCompItemButton(index)}
                      className="delete-completed-item"
                    >
                      Delete
                    </button>
                  </div>

                  <hr />
                </>
              ))}
            </ol>
          )}
          <div ref={listEndRef} />
        </div>
      </div>
    </>
  );
}
