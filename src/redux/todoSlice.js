import { createSlice } from "@reduxjs/toolkit";

const todoListLocalStoreage = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todoList: todoListLocalStoreage,
  },
  reducers: {
    addNewTodo(state, action) {
      state.todoList.push(action.payload);
      return state;
    },
    updateTodo(state, action) {
      const newTodoData = action.payload;
      const oldTodoIndex = state.todoList.findIndex((todo) => todo.id === newTodoData.id);
      state.todoList[oldTodoIndex] = newTodoData;
      return state;
    },
    deleteOneTodo(state, action) {
      const id = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
      return state;
    },
    deleteManyTodos(state, action) {
      const deleteList = action.payload;
      state.todoList = state.todoList.filter((todo) => !deleteList.includes(todo.id));
      return state;
    },
  },
});

export default todoSlice.reducer;
export const todoSliceActions = todoSlice.actions;
