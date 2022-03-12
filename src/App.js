import "./App.scss";
import NewTask from "./components/NewTask";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container">
      <NewTask />
      <ToDoList />
    </div>
  );
}

export default App;
