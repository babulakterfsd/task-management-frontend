export type TCounterInitialState = {
  count: number;
};

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type TTodoInitialState = {
  todos: TTodo[];
  filter: string;
  filteredTodos?: TTodo[];
};

export type TAuthInitialState = {
  user: object | null;
  token: string | null;
};

export type TCurrentUser = {
  id: string;
  username: string;
  email: string;
  role: string;
};
