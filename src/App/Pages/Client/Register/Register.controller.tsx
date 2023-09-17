import { useCallback, useState } from "react";
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const isLoading = useCallback((): boolean => {
    return Object.values(loading).some((value) => value);
  }, [loading]);

  const userConstructor = useCallback((data: FormValues) => {
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
  }, []);

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

  const openPoliciesModal = useCallback(() => {
    if (!modalTexts.policies.policyDescription)
      dispatch(fetchPolicies() as any);
    setPoliciesModal(true);
  }, [dispatch, modalTexts.policies.policyDescription]);

  const closePoliciesModal = useCallback(() => {
    setPoliciesModal(false);
  }, [setPoliciesModal]);

  const openTermsModal = useCallback(() => {
    if (!modalTexts.terms.termsDescription) dispatch(fetchTerms() as any);
    setTermsModal(true);
  }, [modalTexts.terms.termsDescription, setTermsModal, dispatch]);

  const closeTermsModal = useCallback(() => {
    setTermsModal(false);
  }, []);

  const dispatchLoadingAction = useCallback(() => {
    dispatch(loadingState(isLoading() ? "initialize" : "cancel"));
  },[dispatch, isLoading]);

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
