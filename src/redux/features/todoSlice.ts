import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TTodo } from '../../types/commonTypes';
import { todoInitialState } from '../initialStates';

// as a note, eta bolte pari je ei todoSlice muloto local e state maintain kore. tar maane amar ei poject e ami ei todo related crud ta maintain kortesi apiSlice theke, ekhaner todoSlice theke sudhu local e filter ta kortesi

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        isCompleted: false,
      });
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[todoIndex] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<TTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(todoIndex, 1);
    },
    filterTodos: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filter: action.payload,
        filteredTodos:
          action.payload === 'all'
            ? state.todos
            : state.todos.filter(
                (todo) => todo.isCompleted === (action.payload === 'completed')
              ),
      };
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, filterTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
