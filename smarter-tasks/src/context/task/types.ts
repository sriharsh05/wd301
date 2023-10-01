export interface TaskListState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  // Actions that are available
  export enum TaskListAvailableAction {
    CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST",
    CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
    CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE",
  }

  export type TaskDetailsPayload = {
    title: string;
    description: string;
    dueDate: string;
  };
  
  // Create a type to hold list of actions that can be dispatched
  export type TaskActions =
    | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
    | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
    | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string };
  
  // A type to hold dispatch actions in a context.
  export type TasksDispatch = React.Dispatch<TaskActions>;