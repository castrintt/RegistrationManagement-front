import React from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Buttons from "../../../Components/Buttons/Buttons";
import LabelLogo from "../../../Assets/white-label.png";

type FormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  marketArea: boolean;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <div className={styles.side_bar}>
          <img src={LabelLogo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ab
            ipsam laudantium soluta odio fuga consequatur, amet maxime officia
            eligendi deserunt facilis porro officiis aperiam qui fugiat iste
            reprehenderit fugit.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.form_content}>
            <label>
              <span>Nome Completo *</span>
              <input
                type="text"
                {...register("userName")}
                {...{ required: true }}
              />
            </label>
            <label>
              <span>E-mail *</span>
              <input
                type="email"
                {...register("email")}
                {...{ required: true }}
              />
            </label>
            <label>
              <span>Senha *</span>
              <input
                type="password"
                {...register("password")}
                {...{ required: true }}
              />
            </label>
            <label>
              <span>Confirmar senha *</span>
              <input
                type="password"
                {...register("confirmPassword")}
                {...{ required: true }}
              />
            </label>
            <label>
              <input
                type="checkbox"
                {...register("terms")}
                {...{ required: true }}
              />
              <span>Confirmar aceite dos termos </span>
            </label>
            <label>
              <input type="checkbox" {...register("marketArea")} />
              <span>Confirma que quer receber notificações </span>
            </label>
          </div>
          <div className={styles.buttons_container}>
            <Buttons
              onClickMethod={() => {
                navigate("/");
              }}
              buttonText={"cancelar"}
              variant={"edit"}
            />
            <Buttons
              onClickMethod={() => {
                console.clear();
              }}
              type="submit"
              buttonText={"registrar"}
              variant={"create"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
