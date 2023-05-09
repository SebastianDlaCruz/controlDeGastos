import { FireStorage } from "@fireBS/app";
import { getDownloadURL, ref } from "firebase/storage";

export const getDownloadPhoto = async (idUser: string, nameFolder: string) => {

  try {
    const url = await getDownloadURL(ref(FireStorage, `${nameFolder}/${idUser}`));

    return {
      ok: true,
      url
    }

  } catch (error) {
    return {
      ok: false,
    }
  }

}