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
    addTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {},
    completeTodo: () => {},
  },
});

export const { editTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
