// importing createSlice from reduxjs/toolkit to create a slice
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  // initializing state
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
    /**
     * Adding a todo item to the state
     * @param {object} state
     * @param {object} action
     */
    addTodo: (state, action) => {
      state.data[state.nextId] = {
        content: action.payload.content,
        completed: false,
      };
      state.nextId += 1;
    },

    /**
     * Editing a todo item in the state
     * @param {object} state
     * @param {object} action
     */
    editTodo: (state, action) => {
      const todo = state.data[action.payload.id];

      state.data[action.payload.id] = {
        completed: todo.completed,
        content: action.payload.content,
      };
    },

    /**
     * deleting a todo item from the state
     * @param {object} state
     * @param {object} action
     */
    deleteTodo: (state, action) => {
      delete state.data[action.payload.id];
    },

    /**
     * checking a todo item in the state once completed
     * @param {object} state
     * @param {object} action
     */
    completeTodo: (state, action) => {
      const complete = state.data[action.payload.id];
      state.data[action.payload.id] = {
        completed: !complete.completed,
        content: complete.content,
      };
    },
  },
});

// exporting the addTodo, editTodo, deleteTodo and completeTodo actions
export const { addTodo, editTodo, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
