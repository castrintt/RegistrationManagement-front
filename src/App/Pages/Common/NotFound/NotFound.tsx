import React from "react";
import styles from "./NotFound.module.css";
import { MdDangerous } from "react-icons/md";
import Buttons from "../../../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MdDangerous />
        <h1>Página não encontrada</h1>
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

export default NotFound;
