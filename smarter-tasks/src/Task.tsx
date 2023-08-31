import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
}

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-stone-700 max-w-sm rounded overflow-hidden">
      <h2 className="text-base font-bold my-1 text-white">
        {props.title}
      </h2>
      <p className="text-sm text-white">
        Due Date: <span>{props.dueDate}</span>
      </p>
      <p className="text-sm text-white">
        Description: <span>{props.description}</span>
      </p>
    </div>
  );
};

export default Task;
