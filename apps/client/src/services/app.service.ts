import {axiosFront, getError} from "../boot/axios";

export function loadConfig() {
  return new Promise((resolve, reject) => {
    axiosFront.get('./api/config/client').then(response => {
      resolve(response.data);
    }).catch(error =>{
      const e = getError(error);
      reject(`Error loading client configuration: ${e.message || e}`);
    });
  });
}
