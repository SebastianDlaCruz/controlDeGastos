import NavBar from "@components/NavBar";
import useRedirect from "@hook/useRedirect";
import { getDownloadPhoto } from "@intercepts/getDownloadPhoto.intercepts";
import { setAmount } from "@intercepts/setAmount.intercepts";
import TextField from '@mui/material/TextField';
import { updateUserPhoto } from "@services/db/updateUserPhoto.services";
import { setStorage } from "@services/storage/setStorage.services";
import { useState } from "react";
import imgDefault from "/icons/userAvatar.svg";
const Account = () => {
  const { state } = useRedirect();
  const [value, setValue] = useState('');
  const [img, setImage] = useState<FileList>();
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setImage(event.target.files)
    }
  };

  const handleAmount = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(value);
    setAmount(value, state.uid);
  }


  const handleUpdateProfile = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (img) {
      setStorage(img, state.uid);
      getDownloadPhoto(state.uid, 'users')
        .then(res => {
          if (res.ok && res.url !== undefined) {
            updateUserPhoto(res.url);
          }
        });
    }

  }


  return (
    <>
      <NavBar />
      <div>
        <form onSubmit={handleUpdateProfile}>
          <img src={state.photoUrl || imgDefault} alt={state.name} />
          <input type="file" accept="image/*"
            title="cambia de imagen"
            onChange={handleChangeImg} />
          <TextField id="outlined-basic"
            label="Actualiza tu nombre"
            variant="outlined"
            type="text" />
          <button>Actualizar perfil</button>
        </form>

        <form onSubmit={handleAmount}>
          <h2>Importe de control de gasto</h2>
          <label htmlFor="name">Actualiza el importe:</label>
          <input type="text" placeholder="importe" id="name" onChange={handlerChange} />
          <button>Actualizar importe</button>
        </form>
      </div>
    </>
  );
};

export default Account;
