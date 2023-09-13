import "./App.scss";
import React from "react";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <Container className="todo-container">
      <form className="form-info">
        <h2 className="title mb-5 text-center">Todo List</h2>
        <div className="input-container">
          <input placeholder="Please enter a to-do" />
        </div>

        <div className="list-btns-cont px-5">
          <div className="todos-list">
            <ul>
              <li>list</li>
            </ul>
          </div>

          <div className="buttons">
            <Button className="btns px-0 py-0">
              <span class="material-symbols-outlined">add</span>
            </Button>
            <Button className="btns px-0 py-0">
              <span className="material-symbols-outlined py-1">edit</span>
            </Button>
            <Button className="btns px-0 py-0">
              <span className="material-symbols-outlined py-1">delete</span>
            </Button>
            <Button className="btns px-0 py-0">
              <span className="material-symbols-outlined py-1">done</span>
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default App;
