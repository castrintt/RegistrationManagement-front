/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from "react";
import styles from "./Login.module.css";
import Buttons from "../../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";
import LogoImage from "../../../Assets/white-label.png";

import UseLoginController from "./Login.controller";

const Login = () => {
  const { Actions, Helpers, States } = UseLoginController();

  useEffect(() => {
    Actions.onLoading();
  }, [States.loading]);

  return (
    <div className={styles.container} data-cy="container">
      <div className={styles.image_container} data-cy="image-container"></div>
      <div className={styles.login_container}>
        <form
          className={styles.form}
          onSubmit={Helpers.handleSubmit(Actions.onLogin)}
        >
          <img src={LogoImage} alt="" />
          <h1>Login</h1>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              {...Helpers.input("email")}
              data-cy="email-input"
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              {...Helpers.input("password")}
              data-cy="password-input"
            />
          </label>
          <label>
            <input
              type="checkbox"
              {...Helpers.input("saveAccount")}
              data-cy="save-login"
            />
            <span>salvar login</span>
          </label>
          <Buttons
            onClickMethod={() => {}}
            type="submit"
            buttonText={"entrar"}
            variant={"createFull"}
            width={`100%`}
          />
          <span>
            Não possui uma conta? <Link to="/client/register">clique aqui</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
