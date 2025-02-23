import { environment } from "@/app/environment";
import { getClient } from "./getClient";

const url = environment.apiUrl;

if (url === undefined) {
  throw new Error("Undefined API URL");
}

const axiosClient = getClient(url);

export { axiosClient };
