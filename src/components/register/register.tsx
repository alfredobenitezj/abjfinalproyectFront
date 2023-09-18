import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../register/register.module.scss";
import { useUser } from "../../hooks/use.users";

export function Register() {
  const navigate = useNavigate();
  const { handleRegister } = useUser();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formRegisterElement = event.target as HTMLFormElement;

    const newUser = {
      userName: (
        formRegisterElement.elements.namedItem("userName") as HTMLInputElement
      ).value,
      email: (
        formRegisterElement.elements.namedItem("email") as HTMLInputElement
      ).value,
      passwd: (
        formRegisterElement.elements.namedItem("passwd") as HTMLInputElement
      ).value,
      gender: (
        formRegisterElement.elements.namedItem("gender") as HTMLInputElement
      ).value,
    };
    if (
      newUser.userName === "" ||
      newUser.email === "" ||
      newUser.passwd === "" ||
      newUser.gender === ""
    ) {
      alert("Error");
      navigate("/register");
    } else {
      handleRegister(newUser);
      navigate("/");
    }
  };

  return (
    <>
      <section className={styles.forms}>
        <form className="Register-form" onSubmit={handleSubmit}>
          <div>
            <h2>Registrate ITS FREE</h2>
            <label htmlFor="userName">Nombre</label>
            <input type="text" id="userName" name="userName" required></input>
          </div>

          <div>
            <label htmlFor="passwd">Password</label>
            <input type="password" id="passwd" name="passwd" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required></input>
          </div>

          <div>
            <label htmlFor="gender">
              Escriba si eres un chico chica o chique{" "}
            </label>
            <input type="text" id="gender" name="gender"></input>
          </div>

          <button type="submit">Registrar </button>
        </form>
      </section>
    </>
  );
}
