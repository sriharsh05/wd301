import React from 'react';
import './TaskCard.css'

interface TaskCardProps {
  flag: 'pending' | 'done';
  title: string;
  duedate?: string;
  completedate?: string;
  assignee: string;
}

const TaskCard = (props: TaskCardProps) => {
  if(props.flag === "pending"){
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Due on: {props.duedate}</p>
      <p>Assignee: {props.assignee}</p>
    </div>  
  )
  }
  else if(props.flag === "done"){
    return (
        <div className="TaskItem">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p>Completed on: {props.completedate}</p>
          <p>Assignee: {props.assignee}</p>
        </div>
    )
  }
}

export default TaskCard;