import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../redux/todoSlice";
import "./DetailTask.scss";
import Task from "./Task";
function DetailTask(props) {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();
  const onSelectCheckBox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      props.onChecked((preList) => [...preList, props.id]);
    }
    if (!checked) {
      props.onChecked((preList) => preList.filter((item) => item !== props.id));
    }
  };
  const onClickRemove = () => {
    dispatch(todoSliceActions.deleteOneTodo(props.id));
  };
  const onUpdateTodo = (data) => {
    dispatch(todoSliceActions.updateTodo(data));
  };
  return (
    <div className="detailTask">
      <div className="detailTask__information">
        <div className="detailTask__information--left">
          <input onClick={onSelectCheckBox} type="checkbox" name="" id="" />
          <span>{props.title}</span>
        </div>
        <div className="detailTask__information--right">
          <button onClick={() => setShowDetail((pre) => !pre)} className="btn btnBlue">
            Details
          </button>
          <button onClick={onClickRemove} className="btn btnRed">
            Remove
          </button>
        </div>
      </div>
      {showDetail && <Task onUpdateTodo={onUpdateTodo} {...props} buttonName="Update" />}
    </div>
  );
}

export default DetailTask;
