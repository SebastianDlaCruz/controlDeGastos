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
import { registerUser } from '@services/index.services';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
}).required();

interface registerModel {
  name: string,
  email: string,
  password: string
}

const Register = () => {

  document.title = "Register";

  const [errorForm, setErrorForm] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<registerModel>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: registerModel) => {
    registerUser(data.name, data.email, data.password)
      .then(response => {
        if (response.ok) {
          navigate('/', { replace: true });
          setErrorForm(true);
          reset();
        }
      });
    setErrorForm(false);
  }

  return (
    <Box backgroundColor={"blackAlpha.800"}>
      <Box as="header" h="40px" textAlign={"center"} padding={"12px"}>
        <Text as="h1" fontSize={"3xl"} color={"whiteAlpha.900"}>Regístrate</Text>
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
          isInvalid={errorForm}
        >

          <FormLabel>Ingrese su nombre</FormLabel>
          <Input type='text' placeholder='ejemplo: Sebastian' {...register("name")} />
          {errors.name && <FormLabel>{errors.name.message}</FormLabel>}

          <FormLabel>Ingrese su email</FormLabel>
          <Input type='email' placeholder='ejemplo: sebas@gmail.com' {...register("email")} />
          {errors.email && <FormLabel>{errors.email.message}</FormLabel>}

          <FormLabel>Ingrese su contraseña</FormLabel>
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
          <Text textAlign={"center"}>Ya tenes cuenta podes iniciar session aca
            <Link as={RouterLink} to="/login"
              paddingLeft={"7px"}
              textDecoration={"underline"}
              color={"purple.700"}>Iniciar session</Link> </Text>
        </FormControl>
      </Box>
    </Box >
  )
}

export default Register