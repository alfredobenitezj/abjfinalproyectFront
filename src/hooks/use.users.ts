import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useMemo } from "react";
import { User } from "../models/user.model";
import { loginUserAsync, registerUserAsync } from "../reducers/thunks";
import { userRepository } from "../services/user.repository";
import { setUserLogged, logout as logoutAction } from "../reducers/user.slice";

export function useUser() {
  const { currentUser, token } = useSelector((state: RootState) => state.user);
  const url = "http://localhost:4400/";
  const repo: userRepository = useMemo(() => new userRepository(url), []);
  const dispatch: AppDispatch = useDispatch();

  const handleRegister = (user: Partial<User>) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  const handleLogin = async (user: Partial<User>) => {
    const resultAction = await dispatch(loginUserAsync({ repo, user }));

    if (loginUserAsync.fulfilled.match(resultAction)) {
      const { token, user: userLoggedData } = resultAction.payload as {
        token: string;
        user: User;
      };

      if (userLoggedData && token) {
        dispatch(
          setUserLogged({
            id: userLoggedData.id ?? "",
            userName: userLoggedData.userName,
            email: userLoggedData.email,
            token: token,
          })
        );
        localStorage.setItem("userToken", token);
        return token;
      }
    }
    return;
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutAction());
  };

  return {
    handleRegister,
    handleLogin,
    logout,
    token,
    currentUser,
  };
}
