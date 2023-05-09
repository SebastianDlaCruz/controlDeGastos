import { FireStorage } from "@fireBS/app";
import { ref, uploadBytes } from "firebase/storage";

export const setStorage = (img: FileList, id: string) => {

  console.log(img);
  const spaceRef = ref(FireStorage, `users/${id}`);
  uploadBytes(spaceRef, img[0]).then(snapshot => {

    console.log('exito al subir la foto');
  }).catch((error) => {
    console.log('error al subir la foto');
  });
}   