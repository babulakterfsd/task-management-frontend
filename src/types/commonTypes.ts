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
