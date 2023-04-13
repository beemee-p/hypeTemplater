import axios from 'axios';

export const AxiosGet = async (url: string) => {
  const result = await axios
    .get(`http://localhost:3002/${url}`)
    .then((res) => res.data);
  return result;
};

export const AxiosPost = async (url: string, data: any) => {
  const result = await axios
    .post(`http://localhost:3002/${url}`, {
      data,
    })
    .then((res) => res.data);
  return result;
};
