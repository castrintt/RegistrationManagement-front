/* eslint-disable @typescript-eslint/no-explicit-any */
import { authClient } from "@store/reducers/authClient/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@store/Store";
import { loadingState } from "@store/reducers/loading/loadingSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthUserResponse } from "@clientResponse/authUser/AuthUserResponse";

type FormValues = {
  email: string;
  password: string;
  saveAccount: boolean;
};

type PayloadResponse = {
  payload: AuthUserResponse;
};

const UseLoginController = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { loading } = useAppSelector((state) => state.clientLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      authClient({
        login: data.email,
        password: data.password,
        saveLogin: data.saveAccount,
      }) as any
    ).then(({ payload }: PayloadResponse) => {
      if (payload.message.includes("autenticado com sucesso")) {
        navigate("/client/home");
      }
    });
  };

  const loadingObserver = () => {
    dispatch(loadingState(loading ? "initialize" : "cancel"));
  };

  return {
    Actions: {
      onLogin: onSubmit,
      onNavigate: navigate,
      onLoading: loadingObserver,
    },
    States: {
      loading,
    },
    Helpers: {
      input: register,
      handleSubmit,
    },
  };
};

export default UseLoginController;
