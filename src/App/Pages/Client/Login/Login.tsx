/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Buttons from "../../../Components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../../Assets/white-label.png";
import { useDispatch } from "react-redux";
import { authClient } from "../../../Store/reducers/authClient/actions";
import { useAppSelector } from "../../../Store/Store";
import { loadingState } from "../../../Store/reducers/loading/loadingSlice";

type FormValues = {
  email: string;
  password: string;
  saveAccount: boolean;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.clientLogin);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      authClient({
        login: data.email,
        password: data.password,
        saveLogin: data.saveAccount,
      }) as any
    ).then(({ payload }: { payload: boolean }) => {
      if (payload) {
        navigate("/client/home");
      }
    });
  };

  const loadingObserver = () => {
    dispatch(loadingState(loading ? "initialize" : "cancel"));
  };

  useEffect(() => {
    loadingObserver();
  }, [loading]);

  return (
    <div className={styles.container} data-cy="container">
      <div className={styles.image_container} data-cy="image-container"></div>
      <div className={styles.login_container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <img src={LogoImage} alt="" />
          <h1>Login</h1>
          <label>
            <span>E-mail</span>
            <input type="email" {...register("email")} data-cy="email-input" />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              {...register("password")}
              data-cy="password-input"
            />
          </label>
          <label>
            <input
              type="checkbox"
              {...register("saveAccount")}
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
            Não possui uma conta? <Link to="/register">clique aqui</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
