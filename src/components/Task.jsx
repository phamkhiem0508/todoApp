import { useRef } from "react";
import "./Task.scss";
function Task(props) {
  const titleRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();
  const priorityRef = useRef();
  const checkDateInThePass = (date) =>
    new Date(date) - new Date(new Date().toISOString().split("T")[0]) >= 0 ? false : true;

  const getDateNow = (date) => {
    const getFullYear = date ? new Date(date) : new Date();
    return getFullYear.toISOString().split("T")[0];
  };

  const onChangeDate = (e) => {
    const checkDate = checkDateInThePass(e.target.value); // Today or not
    if (checkDate) {
      e.preventDefault();
      alert("Cannot set date in the past, please try again!");
      e.target.value = getDateNow();
      return;
    }
  };
  const autoGenerateID = () => {
    return Math.floor(Math.random() * 10000);
  };

  const onButtonClick = () => {
    const data = {
      id: props.id || autoGenerateID(), //GenerateID when creating todo
      title: titleRef.current.value,
      description: desRef.current.value,
      date: dateRef.current.value,
      priority: priorityRef.current.value,
    };

    if (!data.title) {
      alert("Please write your title");
      return;
    }

    if (props.onAddNewTask) {
      props.onAddNewTask(data);
    }

    if (props.onUpdateTodo) {
      props.onUpdateTodo(data);
    }
  };

  return (
    <div className="task">
      <input
        ref={titleRef}
        type="text"
        name=""
        defaultValue={props.title || ""}
        placeholder={props.titlePlaceHolder || ""}
      />
      <p>Description</p>
      <textarea
        ref={desRef}
        defaultValue={props.description || ""}
        className="border"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className="boxContainer">
        <p>Due Date</p>
        <input
          ref={dateRef}
          onChange={onChangeDate}
          className="border"
          defaultValue={props.date || getDateNow(props.date)}
          type="date"
        />
      </div>
      <div className="boxContainer">
        <p>Priority</p>
        <select ref={priorityRef} defaultValue={"Normal"} className="border">
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button onClick={onButtonClick} className="btnGreen btn">
        {props.buttonName}
      </button>
    </div>
  );
}

export default Task;
