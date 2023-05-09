import NavBar from "@components/NavBar";
import UserContext from "@context/UserContext.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUDB } from "@services/db/addUDB.services";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Prop from "./model/prop.model";
import alimentos from "/img/alimentos.jpg";
import educacion from "/img/educacion.jpg";
import facturas from "/img/facturas.jpg";
import mascotas from "/img/mascotas.jpg";
import ropa from "/img/ropa.jpg";
import tecnologia from "/img/tecnologia.jpg";

type Services = {
  [key: string]: string;
};

const SERVICES: Services = {
  alimentos: alimentos,
  facturas: facturas,
  mascotas: mascotas,
  tecnología: tecnologia,
  educación: educacion,
  ropa: ropa,
};

const schema = yup
  .object({
    expenseName: yup.string().required().matches(/^[a-zA-Z\s]+$/, {
      message:
        "Este campo no acepta nombres de servicios con @ u otro carácter raro",
      excludeEmptyString: true,
    }),
    amount: yup
      .string()
      .matches(/^[0-9]+$/, {
        message: "Este campo solo acepta numero",
        excludeEmptyString: true,
      })
      .required()
      .max(12),
    date: yup.string().required(),
    service: yup.string().required(),
    description: yup.string(),
  })
  .required();

const Add = () => {
  const [selectServices, setSelectServices] = useState(SERVICES.alimentos);
  const [response, setResponse] = useState({
    status: false,
    message: "",
  });

  const { state } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Prop>({
    resolver: yupResolver(schema),
  });

  const services = [
    "alimentos",
    "facturas",
    "educación",
    "tecnología",
    "ropa",
    "mascotas",
  ];

  const onSubmit = (data: Prop) => {

    const { amount, description, expenseName, date, service } = data;

    addUDB("services", {
      idUser: state.uid,
      amount,
      description,
      expenseName,
      service,
      date
    }).then((res) => {
      setResponse({ ...res });
    });
    reset();
  };

  const handleSelect = (event: any) => {
    const { value } = event.target;
    setSelectServices(SERVICES[value]);
  };


  return (
    <>
      <NavBar />
      <div>
        <h1>Añadir</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="ExpenseName">Nombre De Gasto</label>
          <input
            type="text"
            id='ExpenseName'
            {...register("expenseName")}
          />
          {errors && (
            <p>{errors?.expenseName?.message}</p>
          )}

          <label htmlFor="Amount">Importe</label>
          <input type="text" id='Amount' {...register("amount")} />

          {errors && <p >{errors?.amount?.message}</p>}

          <label htmlFor="service">Servicio</label>

          <select
            id="service"
            {...register("service")}
            defaultValue={"alimentos"}
            onClick={handleSelect}
          >
            {services.map((service, index) => (
              <option
                // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                value={service}
                id={service}
              >
                {service}
              </option>
            ))}
          </select>

          <label htmlFor="date">Fecha</label>
          <input type="date" {...register("date")} />

          <label htmlFor="description">
            Description . opcional{" "}
          </label>
          <textarea id="description" {...register("description")} />
          <button>
            Agregar Gasto
          </button>

        </form>

        <div>
          <img src={selectServices} alt={"services"} />
          {response.message !== "" ? (
            <p>
              {response.message}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Add;
