import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { User } from "../../models/user.model";
import { useUser } from "../../hooks/use.users";

export default function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useUser();
  const [error, setError] = useState<string>("");
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const username = element.querySelector(
      'input[name="userName"]'
    ) as HTMLInputElement;
    const password = element.querySelector(
      'input[name="passwd"]'
    ) as HTMLInputElement;

    const loggedUser = {
      userName: username.value.trim(),
      passwd: password.value.trim(),
    } as Partial<User>;
    try {
      const loginSuccess = await handleLogin(loggedUser);
      if (loginSuccess) {
        navigate("/home");
      }
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <section className={styles.login}>
      <section className="login">
        <h2>Logueate</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Nombre</label>
            <input type="text" id="userName" name="userName"></input>
          </div>
          <div>
            <label htmlFor="passwd">password</label>
            <input type="password" id="passwd" name="passwd"></input>
          </div>
          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        </form>
        {error && <p>Error:{error}</p>}
      </section>
    </section>
  );
}
