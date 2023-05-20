import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@services/index.services';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
}).required();

interface loginModel {
  email: string,
  password: string
}

const Login = () => {

  document.title = "Login";

  const [errorForm, setErrorForm] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<loginModel>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: loginModel) => {
    login(data.email, data.password)
      .then(response => {
        if (response.ok) {
          navigate("/", { replace: true });
          setErrorForm(false);
          reset();
        }
      })
    setErrorForm(false);
  }

  return (
    <Box backgroundColor={"blackAlpha.800"}>
      <Box as="header" h="40px" textAlign={"center"} padding={"12px"}>
        <Text as="h1" fontSize={"3xl"} color={"whiteAlpha.900"}>Iniciar Sesión</Text>
      </Box>

      <Box display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100vh"}>
        <FormControl
          as="form"
          display={"flex"}
          flexDirection={"column"}
          w={"400px"}
          minH={"400px"}
          borderRadius={"12px"}
          justifyContent={"center"}
          gap={"12px"}
          backgroundColor={"blackAlpha.900"}
          padding={"29px"} color={"whiteAlpha.900"}
          onSubmit={handleSubmit(onSubmit)}
          isInvalid={errorForm}>

          <FormLabel>Ingrese email</FormLabel>
          <Input type='email' placeholder='ejemplo: sebas@gmail.com' {...register("email")} />
          {errors.email && <FormLabel>{errors.email.message}</FormLabel>}

          <FormLabel>Ingrese contraseña</FormLabel>
          <Input type='password' {...register("password")} />
          {errors.password && <FormLabel>{errors.password.message}</FormLabel>}

          <Button type="submit" bg={"purple.700"}
            _hover={
              {
                backgroundColor: "purple.300"
              }
            }
            marginBlockStart={"23px"}
          >Iniciar session</Button>
          <Text textAlign={"center"}>No tenes cuenta podes registrarte aca
            <Link as={RouterLink} to="/register"
              paddingLeft={"12px"}
              textDecoration={"underline"}
              color={"purple.700"}>Regístrate</Link> </Text>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Login;