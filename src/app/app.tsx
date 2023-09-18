import { AppRoutes } from "../../src/components//app.routes/app.routes";
import { Header } from "../../src/components/header/header";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { MenuOptions } from "../types/menu.options";
import { Menu } from "../components/menu/menu";
import { Footer } from "../components/footer/footer";
import styles from "../app/app.module.scss";
import { UserLogged, setUserLogged } from "../reducers/user.slice";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      const decodedToken = jwtDecode(lsToken);
      if (typeof decodedToken === "object" && decodedToken !== null) {
        const userData: UserLogged = decodedToken as UserLogged;
        dispatch(setUserLogged(userData));
      }
    }
  }, [dispatch]);

  const menuOptions: MenuOptions = [
    { url: "home", label: "Inicio", protected: false },
    { url: "listcomment", label: "Lista de comentarios", protected: false },
    { url: "add_comment", label: "Añade tu comentario", protected: false },
  ];

  return (
    <>
      <div className={styles.appp}>
        <Header>
          <Menu options={menuOptions}></Menu>
        </Header>
        <main>
          <AppRoutes></AppRoutes>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
