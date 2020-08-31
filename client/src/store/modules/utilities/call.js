import axios from 'axios';

export const getList = () => {
  return new Promise((resolve, reject) => {
    const api = axios
      .get(`http://localhost:4000/list`)
      .then(e => resolve(e.data))
      .catch(err => reject(err));

    return api;
  });
};
