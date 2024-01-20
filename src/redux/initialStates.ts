import { TCounterInitialState, TTodoInitialState } from '../types/commonTypes';

export const counterInitialState: TCounterInitialState = {
  count: 0,
};

export const todoInitialState: TTodoInitialState = {
  todos: [],
  filter: 'all',
  filteredTodos: [],
};
