import React from "react";
import styles from "./Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Buttons from "../../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";
import LogoImage from "../../../Assets/white-label.png";

type FormValues = {
  email: string;
  password: string;
  saveAccount: boolean;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_container}></div>
      <div className={styles.login_container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <img src={LogoImage} alt="" />
          <h1>Login</h1>
          <label>
            <span>E-mail</span>
            <input type="text" {...register("email")} />
          </label>
          <label>
            <span>Senha</span>
            <input type="password" {...register("password")} />
          </label>
          <label>
            <input type="checkbox" {...register("saveAccount")} />
            <span>salvar login</span>
          </label>
          <Buttons
            onClickMethod={() => console.clear()}
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
