import Title from "@components/Title";
import UserContext from "@context/UserContext.context";
import { useContext } from "react";
import userAvatar from "/icons/userAvatar.svg";

const ContainerUser = () => {
  const { state } = useContext(UserContext);

  return (
    <div>
      <img src={userAvatar} alt={"name"} />
      <Title level={1} text={`Bienvenido  ${state.name}`} />
    </div>
  );
};

export default ContainerUser;
