import React from "react";
import styles from "./Unauthorize.module.css";
import { IoIosAlert } from "react-icons/io";
import Buttons from "../../../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Unauthorize = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IoIosAlert />
        <h1>Sem acesso!</h1>
        <span>Por favor, escolha uma opção:</span>
        <div className={styles.buttons_container}>
          <Buttons
            onClickMethod={() => navigate(-1)}
            buttonText={"voltar a ultima tela"}
            variant={"edit"}
            width={"100%"}
          />
          <Buttons
            onClickMethod={() => navigate("/login")}
            buttonText={"ir ao login"}
            variant={"create"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Unauthorize;
