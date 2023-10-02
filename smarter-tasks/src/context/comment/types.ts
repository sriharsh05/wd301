type CommentOwner = {
  id: number;
  email: string;
  name: string;
};

export type CommentDetails = {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  task_id: number;
  owner: number;
  User: CommentOwner;
};

export type CommentData = Omit<CommentDetails, "id" | "updatedAt" | "User">;

export interface CommentsState {
  comments: CommentData[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type CommentsDispatch = React.Dispatch<CommentsActions>;

export enum CommentListAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",

  ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST",
  ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",
}

export type CommentsActions =
  | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
  | {type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentData[];}
  | {type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string;}
  | { type: CommentListAvailableAction.ADD_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.ADD_COMMENT_SUCCESS }
  | { type: CommentListAvailableAction.ADD_COMMENT_FAILURE; payload: string };
