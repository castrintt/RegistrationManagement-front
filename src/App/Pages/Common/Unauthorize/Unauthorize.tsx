import React from "react";
import styles from "./Unauthorize.module.css";
import { IoIosAlert } from "react-icons/io";
import Buttons from "@components/Buttons/Buttons";
import { UseUnauthorizeController } from "./Unauthorize.controller";

const Unauthorize = () => {
  const { Actions } = UseUnauthorizeController();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IoIosAlert />
        <h1>Sem acesso!</h1>
        <span>Por favor, escolha uma opção:</span>
        <div className={styles.buttons_container}>
          <Buttons
            onClickMethod={() => Actions.onNavigate(-1)}
            buttonText={"voltar a ultima tela"}
            variant={"edit"}
            width={"100%"}
          />
          <Buttons
            onClickMethod={() => Actions.onNavigate("/login")}
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
