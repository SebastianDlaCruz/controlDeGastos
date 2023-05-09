import Title from "@components/Title";
import UserContext from "@context/UserContext.context";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { accessAccount } from "@services/Auth/accessAccount.services";
import { addUDB } from "@services/db/addUDB.services";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { WhiteTextFiled } from "../../../styled/index.styled";
import RegisterProps from "./model/register.model";

const schema = yup
  .object({
    name: yup.string().required().matches(/^[a-zA-Z0-9_-]+$/, {
      message: "Este campo no acepta nombres con @ u otro carácter raro",
      excludeEmptyString: true,
    }),
    email: yup.string().required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Este campo tiene que tener un formato de email valido",
      excludeEmptyString: true,
    }),
    password: yup.string().required().max(16),
  })
  .required();

const Register = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterProps) => {
    const { name, email, password } = data;
    accessAccount(name, email, password, createUserWithEmailAndPassword).then(
      (res) => {
        if (res.ok) {
          addUDB('userExpenses', state.totalExpenditures)
          navigate("/");
        }
      },
    );

    dispatch({
      type: "SET_ID_USER",
      payload: state.uid
    });
  };

  return (
    <>
      <Box component={'header'} sx={{ textAlign: "center" }}>
        <Title level={1} text="Register" />
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
            gap: "12px",
            minHeight: "394px",
            width: "400px",
            padding: "34px",
            borderRadius: "12px",
            backgroundColor: "#0a0a0adc",
          }}>

          <WhiteTextFiled
            label="Name"
            variant="outlined"
            fullWidth
            type="text"
            placeholder="ejemplo:sebes"
            {...register("name")}
          />
          {errors.email && <Alert sx={{ width: "87%" }} variant="filled" severity="error">
            {errors.name?.message} </Alert>}

          <WhiteTextFiled
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            placeholder="ejemplo:sebes@gmail.com"
            {...register("email")}
          />
          {errors.email && <Alert sx={{ width: "87%" }} variant="filled" severity="error">
            {errors.email?.message} </Alert>}

          <WhiteTextFiled
            label="Password"
            variant="outlined"
            fullWidth

            type="password"
            placeholder="ejemplo:******"
            {...register("password")}
          />

          <Button type="submit" variant="contained"
            sx={{
              width: "250px",
              padding: ".7em 2em",
              border: "1px solid #fff",
              backgroundColor: "transparent",
            }}
          > Registrarte</Button>

        </Box>
      </Box>
    </>
  );
};

export default Register;
