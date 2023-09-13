import "./App.css";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <Container className="todo-container">
      <form>
        <div className="input-field">
          <label>To-do List</label>
          <input placeholder="Please enter a to-do" />
        </div>

        <div className="todos-list">
          <ul>
            <li>list</li>
          </ul>
        </div>

        <div className="buttons">
          <Button className="btns">
            <span class="material-symbols-outlined">edit</span>
          </Button>
          <Button className="btns">
            <span class="material-symbols-outlined">delete</span>
          </Button>
          <Button className="btns">
            <span class="material-symbols-outlined">done</span>
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default App;
