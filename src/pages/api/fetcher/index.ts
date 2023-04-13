import axios from 'axios';

export const AxiosGet = async (url: string) => {
  const data = await axios
    .get(`http://localhost:3002/${url}`)
    .then((res) => res.data);
  return data;
};
