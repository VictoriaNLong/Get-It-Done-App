import React, { useState } from "react";
import "./styles.css";
import TaskList from "./TaskList";

function Daily() {
  return (
    <div className="Main">
      <h2>TASKS</h2>
      <TaskList />
    </div>
  );
}

export default Daily;
