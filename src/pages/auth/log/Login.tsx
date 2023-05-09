import MyLink from "@components/MyLink";
import Title from "@components/Title";
import { FirebaseAuth, FirebaseGoogleAuth } from "@fireBS/app";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleIcon from '@mui/icons-material/Google';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { accessAccount } from "@services/Auth/accessAccount.services";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { WhiteTextFiled } from "../../../styled/index.styled";
import LoginProp from "./model/login.model";

const schema = yup
  .object({
    email: yup.string().required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Este campo tiene que tener un formato de email valido",
      excludeEmptyString: true,
    }),
    password: yup.string().required().max(16),
  })
  .required();

const Login = () => {
  const status = {
    state: false,
    message: "",
  };
  const [messageError, setMessageError] = useState(status);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProp>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginProp) => {
    const { email, password } = data;

    accessAccount("", email, password, signInWithEmailAndPassword).then(
      (res) => {
        if (res.ok) {
          navigate("/");
          setMessageError({
            state: true,
            message: res.message,
          });
        } else {
          setMessageError({
            state: false,
            message: res.message,
          });
        }
      },
    );
  };

  const onSubmitGoogle = () => {
    signInWithPopup(FirebaseAuth, FirebaseGoogleAuth)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setMessageError({
          state: false,
          message: error.message,
        });
      });
  };

  return (
    <>

      {messageError.message && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <p>{messageError.message}</p>
        </Alert>
      )}

      <Box component={'header'} sx={{ textAlign: "center" }}>
        <Title level={1} text="Access" />
      </Box>

      <Box sx={{
        display: "grid",
        placeItems: "center"
      }}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
            minHeight: "394px",
            width: "400px",
            padding: "34px",
            borderRadius: "12px",
            backgroundColor: "#0a0a0adc",
          }}>
          <WhiteTextFiled
            label="Email"
            variant="outlined"
            type="email"
            placeholder="ejemplo:sebes@gmail.com"
            fullWidth
            {...register("email")}
          />
          {errors.email && <Alert sx={{ width: "87%" }} variant="filled" severity="error">
            {errors.email?.message} </Alert>}

          <WhiteTextFiled
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            placeholder="ejemplo:******"
            {...register("password")}
          />

          {errors.email && <Alert sx={{ width: "87%" }} variant="filled" severity="error">
            {errors.email?.message} </Alert>}


          <Button type="submit" variant="contained"
            sx={{
              width: "250px",
              padding: ".7em 2em",
              border: "1px solid #fff",
              backgroundColor: "transparent",
            }}
          > Iniciar Sesión</Button>
          <Button
            variant="contained"
            endIcon={<GoogleIcon />}
            sx={{
              width: "250px",
              padding: ".7em 2em",
              border: "1px solid #fff",
              backgroundColor: "transparent",
            }}
            onClick={onSubmitGoogle}
          >google</Button>

          <Box component={"footer"} >
            ¿No tenes cuenta?
            <MyLink text="Regístrate" to="/register" />
          </Box>

        </Box>

      </Box >
    </>
  );
};

export default Login;
