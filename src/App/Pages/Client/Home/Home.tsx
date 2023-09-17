/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import UseHomeController from "./Home.controller";
import PresentationImage from "@assets/img/consumidor_back_login.jpg";
import Icons from "@components/Icons/Icons";
import { EIconName } from "@enums/EIconName";
import { EIconColor } from "@enums/EIconColor";
import Buttons from "@components/Buttons/Buttons";

const Home = () => {
  const { States } = UseHomeController();
  return (
    <div className={styles.container} data-cy="container">
      <div className={styles.presentation_container} data-cy="image-container">
        <img src={PresentationImage} alt="imagem de apresentação" />
      </div>
      <div
        className={styles.solicitation_container}
        data-cy="solicitation-container"
      >
        <section className={styles.title_section}>
          <h1>Solicitações</h1>
          <Buttons
            onClickMethod={() => console.log("")}
            buttonText={"NOVA SOLICITAÇÃO"}
            variant={"createFull"}
            width={"10rem"}
          />
        </section>
        <div className={styles.table_status_resume}>
          <div className={`${styles.card} ${styles.card_pending}`}>
            <span className={styles.card_title}>Pendentes</span>
            <span className={styles.quantity}>12</span>
          </div>
          <div className={`${styles.card} ${styles.card_waiting}`}>
            <span className={styles.card_title}>Em atendimento</span>
            <span className={styles.quantity}>2</span>
          </div>
          <div className={`${styles.card} ${styles.card_rejected}`}>
            <span className={styles.card_title}>Rejeitados</span>
            <span className={styles.quantity}>1</span>
          </div>
          <div className={`${styles.card} ${styles.card_canceled}`}>
            <span className={styles.card_title}>Cancelados</span>
            <span className={styles.quantity}>0</span>
          </div>
          <div className={`${styles.card} ${styles.card_approved}`}>
            <span className={styles.card_title}>Aprovados</span>
            <span className={styles.quantity}>52</span>
          </div>
        </div>
        <div className={styles.responsive_table_container}>
          <div className={styles.table}>
            <label>
              <span>Código</span>
              <span>100</span>
            </label>
            <label>
              <span>Data da solicitação</span>
              <span>21/07/2023</span>
            </label>
            <label>
              <span>Tipo</span>
              <span>Atualização/documento</span>
            </label>
            <label>
              <span>Status</span>
              <span>Pendente</span>
            </label>
            <label>
              <span>Ações</span>
              <div className={styles.actions}>
                <Icons
                  icon={EIconName.Search}
                  color={EIconColor.Orange}
                  size={"1.3rem"}
                  action={() => console.log("clicou")}
                  isActive={false}
                  tooltip={{
                    title: "Visualizar",
                    position: "top",
                  }}
                />
                <Icons
                  icon={EIconName.Edit}
                  color={EIconColor.LightBlue}
                  size={"1.3rem"}
                  action={() => console.log("clicou")}
                  isActive={false}
                  tooltip={{
                    title: "Editar",
                    position: "top",
                  }}
                />
                <Icons
                  icon={EIconName.Trash}
                  color={EIconColor.Red}
                  size={"1.3rem"}
                  action={() => console.log("clicou")}
                  isActive={false}
                  tooltip={{
                    title: "Deletar",
                    position: "top",
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className={styles.table_container}></div>
      </div>
    </div>
  );
};

export default Home;
