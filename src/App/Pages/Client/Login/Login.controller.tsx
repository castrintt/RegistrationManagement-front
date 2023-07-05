/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authClient } from "../../../Store/reducers/authClient/actions";
import { useAppSelector } from "../../../Store/Store";
import { loadingState } from "../../../Store/reducers/loading/loadingSlice";

type FormValues = {
  email: string;
  password: string;
  saveAccount: boolean;
};

type PayloadResponse = {
  payload: {
    accessToken: string;
    expiry: number;
    message: string;
    refreshToken: string;
  };
};

const UseLoginController = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.clientLogin);

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
