import { useUser } from "./use.users";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import thunk from "redux-thunk";
import { loginUserAsync } from "../reducers/thunks";
import { User } from "../models/user.model";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockUser: Partial<User> = {
  userName: "churruflus",
  email: "churruflus@rruflus",
};
jest.mock("../services/user.repository", () => {
  return jest.fn().mockImplementation(() => {
    return {
      register: jest.fn(),
      login: jest.fn(),
    };
  });
});

function TestComponent() {
  const { handleRegister, handleLogin, logout } = useUser();
  return (
    <>
      <button onClick={() => handleRegister(mockUser)}>register</button>
      <button onClick={() => handleLogin(mockUser)}>
        <button onClick={() => logout()}>logout</button>
        register
      </button>
    </>
  );
}

describe("Given the useUSer custon hook", () => {
  let store: any;
  let buttons: HTMLElement[];
  beforeEach(() => {
    store = mockStore({
      user: { currentUser: null, token: null },
    });
    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
    buttons = screen.getAllByRole("button");
  });
  test("handleLogin should dispatch", () => {
    fireEvent.click(buttons[1]);
    const actions = store.getActions();
    expect(actions[0].type).toBe(loginUserAsync.pending.type);
  });
  test("logout should remove the token from localstroeafge", () => {
    localStorage.setItem("userToken", "mockToken");
    fireEvent.click(buttons[2]);
    expect(localStorage.getItem("userToken")).toBeNull();
  });
});
