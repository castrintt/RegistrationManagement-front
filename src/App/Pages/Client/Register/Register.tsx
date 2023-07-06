/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from "react";
import styles from "./Register.module.css";
import Buttons from "@components/Buttons/Buttons";
import LabelLogo from "@assets/white-label.png";
import UseRegisterController from "./Register.controller";
import { Modal } from "@components/Modal/Modal";

const Register = () => {
  const { Actions, States, Helpers } = UseRegisterController();

  useEffect(() => {
    Actions.onLoading();
  }, [States.loading]);

  return (
    <React.Fragment>
      <Modal.Container isOpen={States.termsModal}>
        <Modal.Content styledId={styles.modal_content} data-cy="terms-modal">
          <Modal.DefaultCloseIcon
            data-cy="close-icon-terms"
            action={Actions.onCloseTermsModal}
          />
          <Modal.Title text="Termos de uso" data-cy="terms-modal-title" />
          <Modal.Text text={States.modalTexts.terms.termsDescription} />
        </Modal.Content>
      </Modal.Container>
      <Modal.Container isOpen={States.policiesModal}>
        <Modal.Content styledId={styles.modal_content} data-cy="policies-modal">
          <Modal.DefaultCloseIcon
            data-cy="close-icon-policies"
            action={Actions.onClosePoliciesModal}
          />
          <Modal.Title
            text="Politicas de privacidade"
            data-cy="policies-modal-title"
          />
          <Modal.Text text={States.modalTexts.policies.policyDescription} />
        </Modal.Content>
      </Modal.Container>
      <div className={styles.container} data-cy="register-container">
        <div className={styles.main_container}>
          <div className={styles.side_bar} data-cy="sidebar">
            <img src={LabelLogo} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ab
              ipsam laudantium soluta odio fuga consequatur, amet maxime officia
              eligendi deserunt facilis porro officiis aperiam qui fugiat iste
              reprehenderit fugit.
            </p>
          </div>
          <form
            data-cy="form"
            onSubmit={Helpers.handleSubmit(Actions.onRegister)}
            className={styles.form}
          >
            <div className={styles.form_content}>
              <label>
                <span>E-mail *</span>
                <input
                  type="email"
                  data-cy="email-input"
                  {...Helpers.input("email")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <span>Senha *</span>
                <input
                  type="password"
                  data-cy="password-input"
                  {...Helpers.input("password")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <span>Confirmar senha *</span>
                <input
                  type="password"
                  data-cy="confirm-password-input"
                  {...Helpers.input("confirmPassword")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  data-cy="terms-checkbox"
                  {...Helpers.input("terms")}
                  {...{ required: true }}
                />
                <span>Confirmar aceite dos termos </span>
              </label>
              <label>
                <input
                  data-cy="market-area-checkbox"
                  type="checkbox"
                  {...Helpers.input("marketArea")}
                />
                <span>Confirma que quer receber notificações </span>
              </label>
              <div className={styles.terms_policies_container}>
                <span
                  data-cy="terms-modal-button"
                  onClick={Actions.onOpenTermsModal}
                >
                  Termo de uso
                </span>
                <span
                  data-cy="policies-modal-button"
                  onClick={Actions.onOpenPoliciesModal}
                >
                  Politicas de privacidade
                </span>
              </div>
            </div>
            <div className={styles.buttons_container}>
              <Buttons
                onClickMethod={() => {
                  Actions.onNavigate("/client/login");
                }}
                buttonText={"cancelar"}
                variant={"edit"}
                width={"auto"}
              />
              <Buttons
                onClickMethod={() => {}}
                type="submit"
                buttonText={"registrar"}
                variant={"create"}
                width={"auto"}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
