import React from "react";
import Task from "./Task";
import { ColumnData, TaskDetails } from "../../context/task/types";

const Container = (props: React.PropsWithChildren) => {
  return (
    <div className="m-2 border border-gray rounded w-1/3 flex flex-col">
      {props.children}
    </div>
  );
};

const Title = (props: React.PropsWithChildren) => {
  return <h3 className="p-2 font-semibold">{props.children}</h3>;
};

const TaskList = (props: React.PropsWithChildren) => {
  return <div className="grow min-h-100"> {props.children}</div>;
};

interface Props {
  column: ColumnData;
  tasks: TaskDetails[];
}

const Column: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <TaskList>
        {props.tasks.map((task) => (
          <Task key={task.id} task={task}  />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;