import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleCheckboxClick = async () => {
    try {
      await axios.put(`/tasks/${task._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="task-item">
      <div className="date">{moment(task.createdAt).format("MMM Do YY")}</div>
      <div className="divider"></div>
      <td className="task-name">
        <div
          className="checkbox"
          onChange={handleCheckboxClick}
          role="checkbox"
          aria-checked
        >
          <input
            type="checkbox"
            id="cb"
            checked={isCompleted}
            tabIndex={-1}
            readOnly
          />
        </div>
        <p>{task.title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
        <br />
      </td>
      <div className="status">{isCompleted ? "Complete" : "Incomplete"}</div>
    </tr>
  );
}

export default TaskItem;
