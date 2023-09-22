import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "./store/store";

// creating a test suited for the todo component
describe("Renders: <App />", () => {
  let component;

  // recreating app component on before each test
  beforeEach(() => {
    component = (
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  // Describing the test
  it("renders base component", () => {
    render(component);

    const linkElement = screen.getByText(/Todo List/i);
    expect(linkElement).toBeInTheDocument();
  });

  // taking the snapshot of the component
  it("taking a snapshot", () => {
    const tree = renderer.create(component, {}).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
