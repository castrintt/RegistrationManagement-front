/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@store/Store";
import { fetchTerms } from "@store/reducers/register/terms/actions";
import { useDispatch } from "react-redux";
import { fetchPolicies } from "@store/reducers/register/policies/actions";
import { loadingState } from "@store/reducers/loading/loadingSlice";
import { createUser } from "@store/reducers/register/newUser/actions";
import { callToast } from "@utils/toastCall";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  marketArea: boolean;
};

const UseRegisterController = () => {
  const [termsModal, setTermsModal] = useState<boolean>(false);
  const [policiesModal, setPoliciesModal] = useState<boolean>(false);

  const loading = {
    terms: useAppSelector((state) => state.terms.loading),
    policies: useAppSelector((state) => state.policies.loading),
    register: useAppSelector((state) => state.register.loading),
  };

  const modalTexts = {
    terms: useAppSelector((state) => state.terms.data),
    policies: useAppSelector((state) => state.policies.data),
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = (): boolean => {
    return Object.values(loading).some((value) => value);
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
            navigate("/client/login");
          }
        }
      );
    }
  };

  const openPoliciesModal = () => {
    if (!modalTexts.policies.policyDescription)
      dispatch(fetchPolicies() as any);
    setPoliciesModal(true);
  };

  const closePoliciesModal = () => {
    setPoliciesModal(false);
  };

  const openTermsModal = () => {
    if (!modalTexts.terms.termsDescription) dispatch(fetchTerms() as any);
    setTermsModal(true);
  };

  const closeTermsModal = () => {
    setTermsModal(false);
  };

  const dispatchLoadingAction = () => {
    dispatch(loadingState(isLoading() ? "initialize" : "cancel"));
  };

  return {
    Actions: {
      onRegister: onSubmit,
      onOpenPoliciesModal: openPoliciesModal,
      onClosePoliciesModal: closePoliciesModal,
      onOpenTermsModal: openTermsModal,
      onCloseTermsModal: closeTermsModal,
      onNavigate: navigate,
      onLoading: dispatchLoadingAction,
    },
    States: {
      modalTexts,
      termsModal,
      policiesModal,
      loading: isLoading(),
    },
    Helpers: {
      input: register,
      handleSubmit,
    },
  };
};

export default UseRegisterController;
