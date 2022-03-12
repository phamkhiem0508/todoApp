import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "../redux/todoSlice";
import DetailTask from "./DetailTask";
import Task from "./Task";
import "./ToDoList.scss";
function ToDoList() {
  const { todoList } = useSelector((state) => state.todoSlice);
  const [listChecked, setListChecked] = useState([]);
  const [searchWord, setSearchWord] = useState(null);
  const dispatch = useDispatch();

  const todoFilter = todoList
    .filter((todo) => todo.title.toLowerCase().includes(searchWord))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const onSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const onRemoveAllCheckedBox = () => {
    dispatch(todoSliceActions.deleteManyTodos(listChecked));
  };
  return (
    <div className="todo">
      <h3 className="title">To Do List</h3>
      <input onChange={onSearchChange} placeholder="Search..." type="text" />
      <div className="searchResult">
        {todoFilter.map((todo) => (
          <DetailTask onChecked={setListChecked} key={todo.id} {...todo} />
        ))}
      </div>
      <div className="action">
        <span>Bulk Action: </span>
        <div className="buttonBox">
          <button className="btn btnBlue">Done</button>
          <button onClick={onRemoveAllCheckedBox} className="btn btnRed">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
