import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    nextId: 2,
    data: {
      1: {
        content: "Content 1",
        completed: false,
      },
    },
  },

  reducers: {
    addTodo: (state, action) => {
      state.data[state.nextId] = {
        content: action.payload.content,
        completed: false,
      };
      state.nextId += 1;
    },
    editTodo: (state, action) => {
      const todo = state.data[action.payload.id];

      state.data[action.payload.id] = {
        completed: todo.completed,
        content: action.payload.content,
      };
    },
    deleteTodo: (state, action) => {
      delete state.data[action.payload.id];
    },
    completeTodo: (state, action) => {
      const complete = state.data[action.payload.id];
      state.data[action.payload.id] = {
        completed: !complete.completed,
        content: complete.content,
      };
    },
  },
});

export const { addTodo, editTodo, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
