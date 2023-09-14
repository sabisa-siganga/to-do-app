import React, { useState } from "react";
import "../../components/to-do/to-do.scss";
import { Button } from "react-bootstrap";
import { editTodo, deleteTodo, completeTodo } from "../../store/todo";
import { useDispatch } from "react-redux";

/**
 * component that represents the todo item
 * @param {object} props
 * @returns {React.JSX.Element}
 */
function Todo(props) {
  // destructuring the props
  const { todoId, data } = props;
  // states
  const [edits, setEdits] = useState(false);
  const [inputContent, setInputContent] = useState(data.content);

  // assigning the useDispatch function to a variable
  const dispatch = useDispatch();

  /**
   * Enabling the editing feature
   */
  const onEdit = () => {
    setEdits(true);
  };

  /**
   *storing value that is typed by the user
   * @param {object} e
   */
  const onChange = (e) => {
    setInputContent(e.target.value);
  };

  /**
   * Saving a todo item
   * @param {object} event
   */
  const onSave = (event) => {
    // preventing default on form submit
    event.preventDefault();

    // checking if the input content is not empty, if it's not, add a todo item
    if (inputContent.trim()) {
      const todoContent = {
        content: inputContent,
        id: todoId,
      };
      // dispatching the editTodo reducer
      dispatch(editTodo(todoContent));

      // resetting edits to false after saving a todo item
      setEdits(false);
    }
  };

  /**
   * Deleting a todo item
   */
  const onDelete = () => {
    // dispatching the deleteTodo reducer
    dispatch(
      deleteTodo({
        id: todoId,
      })
    );
  };

  /**
   * Checking a todo item once completed
   */
  const onComplete = () => {
    // dispatching the completeTodo reducer
    dispatch(
      completeTodo({
        id: todoId,
      })
    );
  };
  return (
    <div className="list-btns-cont px-5">
      {/* Checking if edits is true thus diplay the edit form otherwise display the edit, delete and done buttons  */}
      {edits ? (
        <div className="input-edit px-4">
          {/* form containing the input field, save, edit, delete and done buttons */}
          <form onSubmit={onSave}>
            <input value={inputContent} onChange={onChange} />
            <Button className="save-btn" type="submit">
              <span className="material-symbols-outlined">save</span>
            </Button>
          </form>
        </div>
      ) : (
        <>
          {/* checking if a todo item has been completed, the apply the linestroke class */}
          <div className={`todo-content ${data.completed ? "linestroke" : ""}`}>
            {data.content}
          </div>

          {/* edit, delete and done buttons */}
          <div className="buttons">
            {!data.completed && (
              <Button className="btns px-0 py-0" onClick={onEdit}>
                <span className="material-symbols-outlined py-1">edit</span>
              </Button>
            )}

            <Button className="btns px-0 py-0" onClick={onDelete}>
              <span className="material-symbols-outlined py-1">delete</span>
            </Button>
            <Button className="btns px-0 py-0" onClick={onComplete}>
              <span className="material-symbols-outlined py-1">done</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
