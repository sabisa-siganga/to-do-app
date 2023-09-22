import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Todo from "./to-do";
import store from "../../store/store";

// creating a test suited for the todo component
describe("Renders: <Todo />", () => {
  it("renders Todo component", () => {
    // object that represents a todo item
    const item = {
      content: "Content 1",
      completed: false,
    };

    // rendering todo component and wrapping it with Provider from redux
    render(
      <Provider store={store}>
        {/* passing the props to the todo component */}
        <Todo todoId={1} data={item} />
      </Provider>
    );
  });
});
