import React from "react";
import styles from "./NotFound.module.css";
import { MdDangerous } from "react-icons/md";
import Buttons from "../../../Components/Buttons/Buttons";
import { UseNotFoundController } from "./NotFound.controller";

const NotFound = () => {
  const { Actions } = UseNotFoundController();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MdDangerous />
        <h1>Página não encontrada</h1>
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

export default NotFound;
