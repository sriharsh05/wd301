import { API_ENDPOINT } from "../../config/constants";
import {
  ProjectData,
  TaskDetailsPayload,
  TaskListAvailableAction,
  TasksDispatch,
} from "./types";

export const addTask = async (
  dispatch: TasksDispatch,
  projectID: string,
  task: TaskDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_REQUEST });

    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    dispatch({ type: TaskListAvailableAction.CREATE_TASK_SUCCESS });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: TaskListAvailableAction.CREATE_TASK_FAILURE,
      payload: "Unable to create task",
    });
  }
};

export const reorderTasks = (dispatch: TasksDispatch, newState: ProjectData)  => {
  dispatch({type: TaskListAvailableAction.REORDER_TASKS, payload: newState})
}