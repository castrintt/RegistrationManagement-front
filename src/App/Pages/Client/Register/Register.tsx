/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Buttons from "../../../Components/Buttons/Buttons";
import LabelLogo from "../../../Assets/white-label.png";
import Modal from "../../../Components/Modal/Modal";
import { useAppSelector } from "../../../Store/Store";
import { fetchTerms } from "../../../Store/reducers/register/terms/actions";
import { useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { fetchPolicies } from "../../../Store/reducers/register/policies/actions";
import { loadingState } from "../../../Store/reducers/loading/loadingSlice";
import { createUser } from "../../../Store/reducers/register/newUser/actions";
import { callToast } from "../../../../../utils/toastCall";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  marketArea: boolean;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormValues>();
  const [termsModal, setTermsModal] = useState<boolean>(false);
  const [policiesModal, setPoliciesModal] = useState<boolean>(false);

  const { data: termsData, loading: termsLoading } = useAppSelector(
    (state) => state.terms
  );

  const { data: policiesData, loading: policiesLoading } = useAppSelector(
    (state) => state.policies
  );

  const { loading: registerLoading } = useAppSelector(
    (state) => state.register
  );

  const isLoading = (): boolean => {
    return termsLoading || policiesLoading || registerLoading;
  };

  const userConstructor = (data: FormValues) => {
    return {
      login: data.email,
      userPassword: {
        password: data.password,
        passwordConfirm: data.confirmPassword,
      },
      acceptNotification: data.marketArea,
      acceptTermsAndPolicies: data.terms,
      registrationDate: new Date(),
    };
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.confirmPassword !== data.password) {
      callToast("As senhas devem ser iguais!", "warning");
    } else {
      dispatch(createUser(userConstructor(data)) as any).then(
        ({ payload }: { payload: boolean }) => {
          if (payload) {
            navigate("/login");
          }
        }
      );
    }
  };

  useEffect(() => {
    dispatch(loadingState(isLoading() ? "initialize" : "cancel"));
  }, [termsLoading, policiesLoading, registerLoading]);

  useEffect(() => {
    dispatch(fetchTerms() as any);
    dispatch(fetchPolicies() as any);
  }, [dispatch]);

  return (
    <React.Fragment>
      {!!termsData && (
        <Modal isOpen={termsModal}>
          <div className={styles.modal_container} data-cy="terms-modal">
            <AiFillCloseCircle
              data-cy="close-icon-terms"
              onClick={() => setTermsModal(!termsModal)}
            />
            <h1 data-cy="terms-modal-title">Termos de uso</h1>
            <p>{termsData.policyDescription}</p>
          </div>
        </Modal>
      )}
      {!!policiesData && (
        <Modal isOpen={policiesModal}>
          <div className={styles.modal_container} data-cy="policies-modal">
            <AiFillCloseCircle
              data-cy="close-icon-policies"
              onClick={() => setPoliciesModal(!policiesModal)}
            />
            <h1 data-cy="policies-modal-title">Politicas de privacidade</h1>
            <p>{policiesData.policyDescription}</p>
          </div>
        </Modal>
      )}
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
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <div className={styles.form_content}>
              <label>
                <span>E-mail *</span>
                <input
                  type="email"
                  data-cy="email-input"
                  {...register("email")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <span>Senha *</span>
                <input
                  type="password"
                  data-cy="password-input"
                  {...register("password")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <span>Confirmar senha *</span>
                <input
                  type="password"
                  data-cy="confirm-password-input"
                  {...register("confirmPassword")}
                  {...{ required: true }}
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  data-cy="terms-checkbox"
                  {...register("terms")}
                  {...{ required: true }}
                />
                <span>Confirmar aceite dos termos </span>
              </label>
              <label>
                <input
                  data-cy="market-area-checkbox"
                  type="checkbox"
                  {...register("marketArea")}
                />
                <span>Confirma que quer receber notificações </span>
              </label>
              <div className={styles.terms_policies_container}>
                <span
                  data-cy="terms-modal-button"
                  onClick={() => setTermsModal(!termsModal)}
                >
                  Termo de uso
                </span>
                <span
                  data-cy="policies-modal-button"
                  onClick={() => setPoliciesModal(!policiesModal)}
                >
                  Politicas de privacidade
                </span>
              </div>
            </div>
            <div className={styles.buttons_container}>
              <Buttons
                onClickMethod={() => {
                  navigate("/login");
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
