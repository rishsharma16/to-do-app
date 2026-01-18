import "../Stylesheets/TabNav.css";

export default function TabNav({
  activeTab,
  setActiveTab,
  taskItems,
  doneTaskItems,
}) {
  return (
    <>
      <div className="tab-nav-container">
        <button
          className={`tab-btn ${activeTab === "open" ? "active" : ""}`}
          onClick={() => setActiveTab("open")}
        >
          OPEN ({taskItems.length})
        </button>

        <button
          className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          COMPLETED ({doneTaskItems.length})
        </button>
      </div>
      <hr />
    </>
  );
}
