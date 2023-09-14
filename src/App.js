import "./App.scss";
import React from "react";
import Todo from "../src/components/to-do/to-do";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./store/todo";

// Creating an app that adds, edits, delete and checks the todo list

function App() {
  // initializing the state
  const [userInput, setUserInput] = useState("");

  // assigning useDispatch hook to a variable to dispatch an action
  const dispatch = useDispatch();

  // selecting the state
  const data = useSelector((state) => state.todo);

  /**
   * Adding a todo item
   * @param {object} event
   */
  const onAddTodo = (event) => {
    // preventing default of form submit
    event.preventDefault();

    // checking if the input field is not empty, if it's not, add a todo item
    if (userInput.trim()) {
      const userContent = {
        content: userInput,
      };
      // dispatching the addTodo reducer
      dispatch(addTodo(userContent));

      // resetting inputValue to empty an string adding a todo
      setUserInput("");
    }
  };

  /**
   * storing value that is typed by the user
   * @param {object} e
   */
  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Container className="todo-container">
      <h2 className="title mb-5 text-center">Todo List</h2>
      <div className="input-add-btn">
        {/* form containing input and add button */}
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
            {/* add todo button */}
            <Button className="add-button" type="submit">
              <span className="material-symbols-outlined py-1 ">add</span>
            </Button>
          </div>
        </form>
      </div>
      {/* displaying the todo items */}
      <div className="heading mb-3">Todos:</div>
      <div className="todo-list">
        {/*  converting the data object to an array and iterating through it and to display a todo */}
        {Object.entries(data.data).map((item, index) => {
          return <Todo todoId={parseInt(item[0])} data={item[1]} key={index} />;
        })}
      </div>
    </Container>
  );
}

export default App;
