import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/user.slice";
import { storeName } from "../../../config";
import { RootState } from "../../store/store";
import styles from ".//Header.module.scss";

export function Header({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const handleUser = () => {
    if (token) {
      runLogout();
    } else {
      navigate("login");
    }
  };
  const handleRegister = () => {
    console.log("Register");
    navigate("register");
  };
  const runLogout = () => {
    dispatch(logout());
    localStorage.removeItem(storeName);
  };
  return (
    <>
      <header className={styles.header}>
        <div className="title">
          <h1>Anime World</h1>
        </div>
        <div>
          {token ? (
            <>
              <button onClick={handleUser}>Logout</button>
              <span>Bienvenido Cazador de demonios,</span>
            </>
          ) : (
            <>
              <div className="botton">
                <button onClick={handleRegister}>Register</button>

                <button onClick={handleUser}>Login</button>
              </div>
            </>
          )}
        </div>
      </header>
      {children}
    </>
  );
}
