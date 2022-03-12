import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todoSlice,
  },
});

store.subscribe(() => {
  //If state changes, localStoreage will be updated
  const { todoList } = store.getState().todoSlice;
  localStorage.setItem("todoList", JSON.stringify(todoList));
});
export default store;
