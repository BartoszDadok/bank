import axios, { AxiosRequestConfig } from "axios";

const getClient = (baseURL: string) => {
  const options: AxiosRequestConfig = {
    baseURL,
  };

  const client = axios.create(options);

  return client;
};

export { getClient };
