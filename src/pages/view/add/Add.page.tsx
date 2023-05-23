import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { UserContext } from "@context/UserContext.context";
import { yupResolver } from '@hookform/resolvers/yup';
import { BillsModel } from "@models/index.model";
import { addNewDocument } from "@services/index.services";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  services: yup.string().required(),
  amount: yup.number().required(),
  description: yup.string(),
  date: yup.string().required()
}).required();


const Add = () => {

  const { state } = useContext(UserContext);

  const services = [
    "mascotas",
    "alimentos",
    "limpieza",
    "educacion",
    "ropa",
  ];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BillsModel>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: BillsModel) => {
    const dataID = { ...data, id: state.id };
    console.log(dataID);
    addNewDocument('bills', dataID);
    reset();
  }

  return (
    <>
      <Box as="header" textAlign={"center"}>
        <Text as="h1" fontSize={"4xl"}>Añade un nuevo gasto</Text>
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
        >

          <FormLabel>Ingrese nombre del gasto</FormLabel>
          <Input type='text' {...register("name")} />

          <FormLabel>Ingrese monto del gasto</FormLabel>
          <Input type='number' {...register("amount")} />
          <FormLabel>Selecciones el tipo de servicio</FormLabel>

          <Stack spacing={3} >
            <Select size='md'>
              {
                services.map((item, index) => <option key={index} value={item}
                  style={{ backgroundColor: "#000" }}
                  {...register("services")}>{item}</option>)
              }
            </Select>
          </Stack>
          <FormLabel>Selecciones la fecha</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            {...register("date")}
          />

          <FormLabel>Ingrese descripción. Opcional</FormLabel>

          <Textarea {...register("description")} />

          <Button type="submit" bg={"purple.700"}
            _hover={
              {
                backgroundColor: "purple.300"
              }
            }
            marginBlockStart={"23px"}
          >Agregar gasto</Button>
        </FormControl>
      </Box>

    </>
  )
}

export default Add;
