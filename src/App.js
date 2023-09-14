import "./App.scss";
import React from "react";
import Todo from "./to-do/to-do";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./store/todo";

function App() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.todo);

  const onAddTodo = (event) => {
    event.preventDefault();

    if (userInput.trim()) {
      const userContent = {
        content: userInput,
      };
      dispatch(addTodo(userContent));

      setUserInput("");
    }
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Container className="todo-container">
      <h2 className="title mb-5 text-center">Todo List</h2>
      <div className="input-add-btn">
        <form className="form-info" onSubmit={onAddTodo}>
          <div className="input-container">
            <input
              placeholder="Please enter a to-do"
              value={userInput}
              onChange={onChange}
              required
            />
          </div>
          <div className="add-btn">
            <Button className="add-button" type="submit">
              <span className="material-symbols-outlined py-1 ">add</span>
            </Button>
          </div>
        </form>
      </div>
      <div className="heading mb-3">Todos:</div>
      <div className="todo-list">
        {Object.entries(data.data).map((item, index) => {
          return <Todo todoId={parseInt(item[0])} data={item[1]} key={index} />;
        })}
      </div>
    </Container>
  );
}

export default App;
