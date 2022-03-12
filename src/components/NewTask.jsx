import { useDispatch } from "react-redux";
import { todoSliceActions } from "../redux/todoSlice";
import "./NewTask.scss";
import Task from "./Task";

function NewTask() {
  const dispatch = useDispatch();
  const onAddNewTask = (data) => {
    dispatch(todoSliceActions.addNewTodo(data));
  };
  return (
    <div className="newTask">
      <h3 className="title">New Task</h3>
      <Task onAddNewTask={onAddNewTask} buttonName="Add" titlePlaceHolder="Add new task..." />
    </div>
  );
}

export default NewTask;
