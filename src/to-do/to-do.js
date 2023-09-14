import React, { useState } from "react";
import "./to-do.scss";
import { Button } from "react-bootstrap";
import { editTodo } from "../store/todo";
import { useDispatch } from "react-redux";

function Todo(props) {
  const { todoId, data } = props;
  const [edits, setEdits] = useState(false);
  const [inputContent, setInputContent] = useState(data.content);
  const dispatch = useDispatch();

  const onEdit = () => {
    setEdits(true);
  };

  const onChange = (e) => {
    setInputContent(e.target.value);
  };

  const onSave = (event) => {
    event.preventDefault();

    if (inputContent.trim()) {
      const todoContent = {
        content: inputContent,
        id: todoId,
      };
      dispatch(editTodo(todoContent));

      setEdits(false);
    }
  };
  return (
    <div className="list-btns-cont px-5">
      {edits ? (
        <div className="input-edit px-4">
          <form onSubmit={onSave}>
            <input value={inputContent} onChange={onChange} />
            <Button className="save-btn" type="submit">
              <span className="material-symbols-outlined">save</span>
            </Button>
          </form>
        </div>
      ) : (
        <>
          <div className={`todo-content ${data.completed ? "linestroke" : ""}`}>
            {data.content}
          </div>

          <div className="buttons">
            {!data.completed && (
              <Button className="btns px-0 py-0" onClick={onEdit}>
                <span className="material-symbols-outlined py-1">edit</span>
              </Button>
            )}

            <Button className="btns px-0 py-0">
              <span className="material-symbols-outlined py-1">delete</span>
            </Button>
            <Button className="btns px-0 py-0">
              <span className="material-symbols-outlined py-1">done</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
